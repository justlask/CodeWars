# money money money
# 7kyu
# https://www.codewars.com/kata/money-money-money/train/ruby


def calculate_years(principal, interest, tax, desired)
  years = 0
  while principal < desired
    principal += (principal * interest)*(1-tax)
    years += 1
  end
  years
end