// 🧩Functions bundle code so we can reuse it

// Here's how to write a function
// function drawFish() {
//   for (let i = 0; i < 2; i++) {
//     console.log("･ﾟﾟ･:. ><((((°>  ")
//   }
// }



// 🧩Concept: initializing a variable to store what we want to get out of a function

// function drawFish() {
//   let fishString = ""
//   for (let j = 0; j < 5; j++) {
//     fishString += "･ﾟﾟ･:. ><((((°>"
//   }
//   console.log(fishString)
// }

//🧩Concept: Putting a value into a function (arguments and parameters)

// function drawFish(howManyTimes) {
//   let fishString = ""
//   for (let j = 0; j < howManyTimes; j++) {
//     fishString += "･ﾟﾟ･:. ><((((°>"
//   }
//   console.log(fishString)
// }


drawFish(15)

// 🧩Concept: Returning a value from a function

function doSomeMath(number) {
  return number * 2
}

// 🧩Concept: Using a function as a value

function drawFish() {
  let howManyTimes = doSomeMath(3)
  let fishString = ""
  for (let j = 0; j < howManyTimes; j++) {
    fishString += "･ﾟﾟ･:. ><((((°>"
  }
  console.log(fishString)
}
