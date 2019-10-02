// Clocky Mc Clock-Face
// 6kyu

//Story
// Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

// And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

// Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

// What a bunch of cheapskates!

// Can you do it?

// Kata
// Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.

// Examples
// 12:00 = 0 degrees
// 03:00 = 90 degrees
// 06:00 = 180 degrees
// 09:00 = 270 degrees
// 12:00 = 360 degrees



var whatTimeIsIt = function(angle) {
  let hrs = String( Math.floor((angle*2)/60));
  let mins = Math.floor((angle*2) - Number(hrs*60))

  if (hrs === "0") {
    hrs = "12"
  }
  if (hrs < 10) {
    hrs = "0" + String(hrs)
  }
  
  if (mins === "0" && !mins === "0") {
    mins = "00"
  }
  if (mins < 10) {
    mins = "0" + String(mins)
  }
  
  return `${hrs}:${mins}`
  
}


// whatTimeIsIt(0) //, "12:00"

// whatTimeIsIt(90) //, "03:00"

// whatTimeIsIt(180) //, "06:00"

// whatTimeIsIt(270) //, "09:00"

//whatTimeIsIt(360) //, "12:00"