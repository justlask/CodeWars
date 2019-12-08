=begin

Complimentary dna
7kyu

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

DNA_strand ("ATTGC") # return "TAACG"

DNA_strand ("GTAT") # return "CATA"
=end




def DNA_strand(dna)
  #your code here
  result = ""
  dnamatch = {"C" => "G", "G" => "C", "A" => "T", "T" => "A" }
  dna.each_char do |x|
    result += dnamatch[x]
  end
  return result
end



=begin

every time i do a challenge, i feel like im solving it so basically because then i learn that ruby has a method to do all these things.
things i've learned so far today, .chars .uniq and .tr
=end


def DNA_strand(dna)
  #your code here
  dna.tr('ATCG', 'TAGC')
end