# List Filtering
# 7kyu
# https://www.codewars.com/kata/list-filtering/train/ruby


def filter_list(l)
  # return a new list with the strings filtered out
  l.select {|x|  !x.is_a? String }
end