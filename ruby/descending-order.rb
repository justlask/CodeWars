=begin
Descending Order
7kyu

https://www.codewars.com/kata/descending-order/train/ruby

=end


def descending_order(n)
  #...
  n.to_s.split("").sort.reverse.join("").to_i
end