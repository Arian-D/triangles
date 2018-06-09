// get the canvas element
const canvas = document.getElementById("canvas")
// Set the cursor style
canvas.style.cursor = "crosshair"
// set the border style
canvas.style.border = "1px solid black"

const ctx = canvas.getContext("2d")
// The width and height of the canvas
const height = canvas.height = window.innerHeight * (0.90)
const width = canvas.width = window.innerWidth * (0.85)



// Returns the rgb value
const rgb = (r,g,b) =>
{
  return "rgb(" + r + "," + g + "," + b + ")"
}

// Returns a random integer
const randomInt = (min, max) =>
{
  return Math.floor(Math.random() * max-min) + min
}
