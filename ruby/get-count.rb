# get count
# 7 kyu

#https://www.codewars.com/kata/vowel-count/train/ruby

#with chars loop
def getCount(inputStr)
  #your code here
  count = 0
  inputStr.chars {|x| x.match(/[aeiou]/) ? count += 1 : count += 0 }
  count
end

# with count method
def getCount(inputStr) 
  inputStr.count("aeiou")
end