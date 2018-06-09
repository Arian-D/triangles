const SIZE = 40
const BACKGROUND_COLOR = rgb(255,255,255)
const GRID = false

class triangle
{
  constructor(x,y,size, isRight)
  {
    this.color = BACKGROUND_COLOR
    this.x = x
    this.y = y
    this.size = size
    this.isRight = isRight
  }

  graph()
  {
    ctx.beginPath()

    if (this.isRight)
    {
      // Triangles facing right
      ctx.moveTo(this.x, this.y)
      ctx.lineTo(this.x + (this.size * Math.cos(Math.PI / 6)), this.y - (this.size / 2))
      ctx.lineTo(this.x + (this.size * Math.cos(Math.PI / 6)), this.y + (this.size / 2))
      ctx.lineTo(this.x, this.y)
    }
    else
    {
      // Triangles facing left
      ctx.moveTo(this.x, this.y - this.size / 2)
      ctx.lineTo(this.x + (this.size * Math.cos(Math.PI / 6)), this.y)
      ctx.lineTo(this.x, this.y + this.size / 2)
      ctx.lineTo(this.x, this.y - this.size / 2)
    }

    // Fill in the shape with the color
    if (GRID)
      ctx.stroke()

    ctx.fillStyle = this.color
    ctx.fill()
  }

  isInsideTriangle(x,y)
  {
    // y-y1 = m(x-x1)
    // y = m(x-x1) + y1

    if ((x > this.x && x < this.x + this.size * Math.cos(Math.PI / 6)) && (y > this.y - this.size / 2 && y < this.y + this.size / 2))
    {
      if (this.isRight)
      {
        if ((- (x - this.x) / Math.sqrt(3) + this.y) < y && ((x - this.x) / Math.sqrt(3) + this.y) > y)
        {
          return true
        }
      }
      else if (!this.isRight)
      {

        if (((x - this.x) / Math.sqrt(3) + this.y - (this.size / 2)) < y && (- (x - this.x) / Math.sqrt(3) + this.y + this.size / 2) > y)
        {
          return true
        }
      }
    }
  }
}

let triangles = []


// Create the triangle objects
let temp_distance = SIZE * Math.cos(Math.PI/6)
for (let i = -1 * Math.cos(Math.PI/6); i < height + (SIZE/2); i += SIZE/2)
{
  // Alternating distance of the beginning position
  temp_distance = (temp_distance === SIZE * Math.cos(Math.PI / 6)) ? 0 : SIZE * Math.cos(Math.PI / 6)

  for (let j = temp_distance; j < width; j += 2 * (SIZE * Math.cos(Math.PI / 6)))
  {
    triangles.push(new triangle(j,i,SIZE, false))
  }

  for (let j = temp_distance-(SIZE * Math.cos(Math.PI / 6)); j < width; j += 2 * (SIZE * Math.cos(Math.PI / 6)))
  {
    triangles.push(new triangle(j,i,SIZE, true))
  }
}
