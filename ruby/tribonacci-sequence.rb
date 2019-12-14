=begin
Tribonacci Sequence
6kyu

https://www.codewars.com/kata/tribonacci-sequence/ruby


=end

def tribonacci(signature,n)
  #your code here
  
  (n-3).times {signature << signature[-3] + signature[-2] + signature[-1]}
  signature[0...n]
end


#solution to practice if, elsif, else syntax
def tribonacci(signature,n)
  #your code here
  count = signature.length
  if n == 0
    return []
  elsif n < 3
    return signature[0...n]
  else 
    while count < n
    sum = 0
    signature.last(3).each {|x| sum += x}
    count += 1
    signature << sum
    end
  end
 signature
end