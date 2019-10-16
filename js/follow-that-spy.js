//Follow that spy
// 6 kyu

// We are tracking down our rogue agent Matthew Knight A.K.A. Roy Miller and he travels from places to places to avoid being tracked. Each of his travels are based on a list of itineraries in an unusual or incorrect order. The task is to determine the routes he will take in his every journey. You are given an array of routes of his itineraries. List down only the places where he will go in correct order based on his itineraries.

// Example:
// routes = [[USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN]]

// result: "USA, BRA, UAE, JPN, PHL"

// note: It is safe to assume that there will be no repeating place with different route and there are no empty routes and could have at least one (1) route (from one waypoint to another).


// it should return the places from the given routes
function findRoutes(routes) {
  //Your code here...
  let sorted;
  for (let i = 0; i < routes.length ;i++) {
      sorted = routes.sort((a,b) => {
      if (a[1] === b[0]) return -1
      else return 1
    })
  }

  let theRoute = sorted.map((route, i) => {
    if (i === sorted.length-1) {
      return route.join(", ")
    }
    else return route[0]
  })

  return theRoute.join(", ")

}

// findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]) // "MNL, TAG, CEB, TAC, BOR");
findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]) //"Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle");