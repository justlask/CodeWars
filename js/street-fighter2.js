
//Street Fighter 2 - Character Selection
// 6kyu


fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

moves = ['up', 'left', 'right', 'left', 'left'];
function streetFighterSelection(fighters, position, moves){
  return moves.map(move => {
      if (move === "right") {
        if (position[1] === fighters[0].length-1) {
          position[1] = 0
          return fighters[position[0]][position[1]]
        }
        else {
          position[1]+= 1
          return fighters[position[0]][position[1]]
        }
      }
      if(move === "left") {
        if (position[1] === 0) {
          position[1] = fighters[0].length-1
          return fighters[position[0]][position[1]]
        }
        else {
          position[1] -= 1
          return fighters[position[0]][position[1]]
        }
      }
      if (move === "up") {
        if (position[0] > 0) {
          position[0] -= 1
          return fighters[position[0]][position[1]]
        }
        else return fighters[position[0]][position[1]]
      }
      if (move === "down") {
        if (position[0] < fighters.length-1) {
          position[0] += 1
          return fighters[position[0]][position[1]]
        }
        else {
          return fighters[position[0]][position[1]]
        }
      }
  })
}



console.log((streetFighterSelection(fighters, [0,0], moves)))