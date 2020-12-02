

/*

========================
GARRETT ANSWER
========================

*/


function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i
}

// function checkHours(j) {
//   for (j = 0; j < 10; j ++) {
//     // return j
//     console.log(j)
//   }
// }

function startTime() {

  let currentTime = new Date()
  console.log(currentTime.toLocaleTimeString())
  console.log(currentTime)

// current time - when page is loaded/re-loaded
  let hours = currentTime.getHours()
  let minutes = currentTime.getMinutes()
  let seconds = currentTime.getSeconds()

// print variables to console
  console.log(hours)
  console.log(minutes)
  console.log(seconds)


// passing current time into checkTime function and updating variables
  hours = checkTime(hours)
  minutes = checkTime(minutes)
  seconds = checkTime(seconds)

  console.log(minutes)

// print variables to console
  console.log('Current Time' + '=>' + hours + ':' + minutes + ':' + seconds)

// set function to display real time as it passes
  t = setTimeout(function() {
    startTime()
  }, 1000);


  let secondsDegree = ((seconds / 60) * 360) + 90
  let minutesDegree = ((minutes / 60) * 360) + 90
  let hoursDegree = ((hours / 12) * 360) + 90

  document.querySelector('.second-hand').style.transform = `rotate(${secondsDegree}deg)`

  document.querySelector('.min-hand').style.transform = `rotate(${minutesDegree}deg)`

  document.querySelector('.hour-hand').style.transform = `rotate(${hoursDegree}deg)`
}

startTime()



















/*

========================
WES BOS ANSWER
========================

*/



// const secondHand = document.querySelector('.second-hand')
// const minuteHand = document.querySelector('.min-hand')
// const hourHand = document.querySelector('.hour-hand')
//
// function setDate() {
//   const now = new Date()
//   const seconds = now.getSeconds()
//   const secondsDegrees = seconds / 60 * 360 + 90
//   secondHand.style.transform = `rotate(${secondsDegrees}deg)`
//   // console.log(seconds)
//
//   const minutes = now.getMinutes()
//   const minutesDegrees = minutes / 60 * 360 + 90
//   minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
//   console.log(minutes)
//
//   const hours = now.getHours()
//   const hoursDegrees = hours / 12 * 360 + 90
//   hourHand.style.transform = `rotate(${hoursDegrees}deg)`
//   console.log(hours)
// }
//
// setInterval(setDate, 1000)
