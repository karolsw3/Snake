class Game {

  constructor () {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.board = new Board(40, 40)
    window.addEventListener('resize', this.resize)
    this.resize()

    this.show = this.show.bind(this)

    this.show()
  }

  resize () {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  show () {
    this.ctx.beginPath()
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.fillStyle = 'black'
    this.ctx.fill()
  }

}

class Board {

  constructor (sizeX, sizeY) {
    this.sizeX = sizeX
    this.sizeY = sizeY
  }

}

class Snake {

  constructor (posX, posY) {
    this.posX = posX
    this.posY = posY
  }

}

var game = new Game()
