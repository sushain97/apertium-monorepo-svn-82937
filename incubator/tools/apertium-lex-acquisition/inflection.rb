require "rexml/document"
include REXML

require "net/http"

@application_id = "YahooDemo"

def do_yahoo_search(language, search_term)

	request = "http://search.yahooapis.com/WebSearchService/V1/webSearch?appid=#{@application_id}&query=#{URI.encode(search_term)}&language=#{language}&results=2"
	puts request

	# make the request
	begin
		results = Net::HTTP.get_response(URI.parse(request)).body
	rescue
		raise "Web services request failed"
	end
	results =~ /totalResultsAvailable="([0-9]+)"/

	return $1.to_i; 
end


file = File.open(ARGV[0])

output = $stdout

if ARGV[1] then
	output = File.open(ARGV[1], "w")
end

doc = Document.new(file)

puts "Please insert a word lemma, ie, the part before / in the paradigm:"
word = $stdin.gets.chomp

possible_paradigms = Hash.new()

i = 0

doc.elements.each("dictionary/pardefs/pardef") do | e |
	puts e.attributes["n"]
	e.attributes["n"] =~ /([^\/]*)/
	lemma = $1
#	puts "Lemma: #{lemma}"

#	if i > 5 then break else i += 1 end

	my_hash = Hash.new()
	zeros = 0

	e.elements.each("e/p/l") do | l |
		inflection = "#{word}#{l.text}"
#		puts "#{word} + #{l.text} = #{inflection}"
		my_hash[inflection] = do_yahoo_search("pt", inflection)
		puts "#{inflection} => #{my_hash[inflection]}"

		# heuristic quickly stop non existing entries
		if my_hash[inflection] == 0 then zeros += 1 else zeros = 0 end
		if zeros > 5 then break end
	end
	puts ""

	possible_paradigms[e.attributes["n"]] = my_hash
#	puts "-------------------------"
end

possible_paradigms.each do | k, v |
	output.puts k
	output.puts "------------------------"
	total = v.values.inject(0) {|b, i| b+i}
	output.puts "Total: #{total}"
	v.each do | nk, nv |
		output.puts "#{nk} => #{nv}"
	end
	output.puts "----------------------------"
end

