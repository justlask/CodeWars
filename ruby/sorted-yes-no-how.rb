#Sorted? yes no how
# 7 kyu

#https://www.codewars.com/kata/sorted-yes-no-how/train/ruby


def is_sorted_and_how(arr)
  # your code here
  if arr == arr.sort
    "yes, ascending"
  elsif arr == arr.sort.reverse
    "yes, descending"
  else
    "no"
  end
end



#chaining ternary
def is_sorted_and_how(arr)
  arr == arr.sort ? "yes, ascending" : arr == arr.sort.reverse ? "yes, descending" : "no"
end