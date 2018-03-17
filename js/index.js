class Game {
  constructor () {
    this.onKeyDown = this.onKeyDown.bind(this)
    this.draw = this.draw.bind(this)
    this.board = new Board(20, 20, 20)
    window.addEventListener('resize', this.resize)
    window.addEventListener('keydown', this.onKeyDown)
    this.resize()
    this.startInterval()
  }

  resize () {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  onKeyDown (event) {
    var keyCode = event.keyCode
    switch (keyCode) {
      case 68: // d
        this.board.snake.actualMoveDirection = 'right'
        break
      case 83: // s
        this.board.snake.actualMoveDirection = 'down'
        break
      case 65: // a
        this.board.snake.actualMoveDirection = 'left'
        break
      case 87: // w
        this.board.snake.actualMoveDirection = 'up'
        break
    }
    this.draw()
  }

  draw () {
    this.board.snake.move()
    ctx.beginPath()
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'black'
    ctx.fill()
    this.board.draw()
  }

  startInterval () {
    setInterval(this.draw, 200)
  }
}

class Board {
  constructor (sizeX, sizeY, tileWidth) {
    this.snake = new Snake(0, 0, '#ff22ff', tileWidth)
    this.sizeX = sizeX
    this.sizeY = sizeY
    this.tileWidth = tileWidth
  }

  draw () {
    ctx.strokeStyle = '#555'

    for (let x = 0; x < this.sizeX; x++) {
      for (let y = 0; y < this.sizeY; y++) {
        ctx.beginPath()
        ctx.strokeRect(x * this.tileWidth, y * this.tileWidth, this.tileWidth, this.tileWidth)
      }
    }

    this.snake.draw()
  }
}

class Snake {
  constructor (posX, posY, color, tileWidth) {
    this.color = color
    this.tiles = []
    for (let i = 0; i < 12; i++) {
      this.tiles.push({
        x: posX + i,
        y: 0
      })
    }
    this.tileWidth = tileWidth
    this.actualMoveDirection = 'right'
  }

  move () {
    switch (this.actualMoveDirection) {
      case 'up':
        this.tiles.push({
          x: this.tiles[this.tiles.length - 1].x,
          y: this.tiles[this.tiles.length - 1].y - 1
        })
        break
      case 'right':
        this.tiles.push({
          x: this.tiles[this.tiles.length - 1].x + 1,
          y: this.tiles[this.tiles.length - 1].y
        })
        break
      case 'down':
        this.tiles.push({
          x: this.tiles[this.tiles.length - 1].x,
          y: this.tiles[this.tiles.length - 1].y + 1
        })
        break
      case 'left':
        this.tiles.push({
          x: this.tiles[this.tiles.length - 1].x - 1,
          y: this.tiles[this.tiles.length - 1].y
        })
        break
    }
    this.tiles.shift()
  }

  draw () {
    for (let i = 0; i < this.tiles.length; i++) {
      ctx.beginPath()
      ctx.rect(this.tiles[i].x * this.tileWidth, this.tiles[i].y * this.tileWidth, this.tileWidth, this.tileWidth)
      ctx.fillStyle = this.color
      ctx.fill()
    }
  }
}

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var game = new Game()
