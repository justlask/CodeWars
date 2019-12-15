# make a function that does arithmetic
# 7kyu
# https://www.codewars.com/kata/make-a-function-that-does-arithmetic/ruby

def arithmetic(a, b, operator)
  #your code here
  case operator
    when "add"
      a + b
    when "subtract"
      a - b
    when "multiply"
      a * b
    when "divide"
      a / b
  end
end