require "rexml/document"
include REXML

require "net/http"

@application_id = "YahooDemo"

def do_yahoo_search(language, search_term, type = "phrase")

	request = "http://search.yahooapis.com/WebSearchService/V1/webSearch?appid=#{@application_id}&query=#{URI.encode(search_term)}&language=#{language}&type=#{type}&results=2"
	#puts request

	# make the request
	begin
		results = Net::HTTP.get_response(URI.parse(request)).body
	rescue
		raise "Web services request failed"
	end
	results =~ /totalResultsAvailable="([0-9]+)"/

	return $1.to_i; 
end

rules = { "gender" => { "m" => ['o', 'um'], "f" => ['a', 'uma']} }

puts "Please insert the nouns of interest, separated by spaces:"
words = $stdin.gets.chomp.split(/\s+/)

puts "Please select query type: (#{rules.keys.join(" ")})"
type = $stdin.gets.chomp

words.each do | word |
sum = Hash.new
rules[type].keys.each do | k |
	sum[k] = 0
end

rules[type].each do | k, v |
	v.each do | prefix |
		sum[k] += do_yahoo_search("pt", "#{prefix} #{word}")
	end
end

p sum
puts "#{word} is #{sum.max { | a, b | a[1] <=> b[1] }[0]}"

end


