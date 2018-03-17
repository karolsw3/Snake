class Game {

  constructor () {
    this.board = new Board(40, 40)
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

  constructor (sizeX, sizeY) {
    this.sizeX = sizeX
    this.sizeY = sizeY
  }

  draw () {
    
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
