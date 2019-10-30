// The Supermarket queue
// 6kyu

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.


function queueTime(customers, n) {
  let tills = []
  customers.forEach(customer => {
    (tills.length < n) ? tills.push(customer) : tills[tills.indexOf(Math.min(...tills))] += customer
  })
  return (tills.length === 0) ? 0 : Math.max(...tills)
}