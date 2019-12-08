=begin
Isograms
7kyu

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

is_isogram("Dermatoglyphics" ) == true
is_isogram("aba" ) == false
is_isogram("moOse" ) == false # -- ignore letter case

=end


def is_isogram(string)
  #your code here
  new = []
  string.each_char do |x|
      puts x
      unless new.include?(x.downcase)
        new << x.downcase
      end
  end
  
  if string.length == new.size
    return true
    else
    return false
  end
  
end