class Game {

  constructor () {
    this.board = new Board(20, 20, 20)
    window.addEventListener('resize', this.resize)
    this.resize()
    this.draw = this.draw.bind(this)
    this.draw()
  }

  resize () {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  draw () {
    ctx.beginPath()
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'black'
    ctx.fill()

    this.board.draw()
  }

}

class Board {

  constructor (sizeX, sizeY, tileWidth) {
    this.sizeX = sizeX
    this.sizeY = sizeY
    this.tileWidth = tileWidth
    this.board = []
    for (let x = 0; x < sizeX; x++) {
      let column = []
      for (let y = 0; y < sizeY; y++) {
        column.push(0)
      }
      this.board.push(column)
    }
  }

  draw () {
    ctx.strokeStyle = '#555'

    for (let x = 0; x < this.sizeX; x++) {
      for (let y = 0; y < this.sizeY; y++) {
        ctx.beginPath()
        ctx.strokeRect(x * this.tileWidth, y * this.tileWidth, this.tileWidth, this.tileWidth)
      }
    }
  }

}

class Snake {

  constructor (posX, posY) {
    this.posX = posX
    this.posY = posY
  }

}

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var game = new Game()
