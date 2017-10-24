# Update noun with classifier in .lrx
require "nokogiri"
require "pp"

include Nokogiri

class Bidix
  attr_reader :n_cla, :n
  def initialize(path)
    @n_cla = {}        
    @n = Hash.new(false)
    bidix = Nokogiri::XML(open(path, "r:UTF-8"))
    dictionary = bidix.children.select{|c| c.name == "dictionary"}[0]
    section = dictionary.children.select{|c| c.name == "section"}[0]
    section.children.select{|c| c.name == "e"}.each do |e|
      p = e.children.select{|c| c.name == "p"}[0]
      l = p.children.select{|c| c.name == "l"}[0]
      slst = l.children.select{|c| c.name == "s"}
      if not slst.empty?
        s0 = slst[0]
        if s0.attribute("n").value == "n"
          tlst = l.children.select{|c| c.kind_of?(XML::Text)}
          if tlst.length == 1
            t0 = tlst[0].text

            glst = l.children.select{|c| c.name == "g"}
            t1 = nil
            if glst.length == 1
              g = glst[0]
              if g.children.length == 2
                if g.children[0].name == "b" and g.children[1].kind_of?(XML::Text)
                  t1 = g.children[1].text
                end
              end
            end

            if t1.nil?
              @n[t0] = true
            else
              @n["#{t0}# #{t1}"] = true
              @n_cla[t0] = t1
            end
          end
        end      
      end
    end
  end
end

def update(bidix, lrx)
  rules = lrx.children.select{|c| c.name == "rules"}[0]
  rules.children.each do |rule|
    if rule.name == "rule"
      rule.children.each do |match|
        if match.name == "match" and match.attributes.has_key?("tags") and 
            match.attributes["tags"].value == "n.*"
          match.children.each do |sel|
            if sel.name == "select" and sel.attributes.has_key?("lemma")
              lemma = sel.attributes["lemma"]
              if not bidix.n.has_key?(lemma.value)
                t0 = lemma.value.split(/#/)[0]
                if bidix.n_cla.has_key?(t0)
                  t = "#{t0}# #{bidix.n_cla[t0]}"
                  lemma.value = t
                end
              end
            end
          end
        end
      end
    end
  end
end

def main
  if ARGV.length != 2
    $stderr.puts "Usage: ruby #{$0} <.lrx path> <bidix path>"
    $stderr.puts "(For example, ruby update_lrx_with_cla.rb apertium-tha-eng.eng-tha.lrx apertium-tha-eng.tha-eng.dix)"
    exit 1
  end

  bidix = Bidix.new(ARGV[1])
  lrx = Nokogiri::XML(open(ARGV[0], "r:UTF-8"))
  update(bidix, lrx)
  puts lrx.to_xml(:encoding => 'UTF-8')
end

if $0 == __FILE__
  main
end
