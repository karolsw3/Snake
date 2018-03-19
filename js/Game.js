import { Board } from './Board.js'

export class Game {
  constructor () {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.resize = this.resize.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.animationFrame = this.animationFrame.bind(this)
    this.board = new Board(30, 30, 16)
    this.highScore = 0
    this.score = 0
    this.paused = true
    this.started = false
  }

  init () {
    window.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('resize', this.resize)
    this.resize()
    this.showInfo('Press space to start', 0)
  }

  resize () {
    this.canvas.width = this.board.sizeX * this.board.tileWidth
    this.canvas.height = this.board.sizeY * this.board.tileWidth
  }

  togglePause () {
    this.paused = !this.paused
    if (this.paused) {
      this.showInfo('Press space to resume', 0)
    }
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
      case 32: // space
        if (!this.started) {
          this.started = true
          this.startInterval()
        }
        this.togglePause()
        break
    }
    this.animationFrame()
  }

  animationFrame () {
    if (this.checkIfSnakeCrashed()) {
      this.gameOver()
    } else if (this.paused) {

    } else {
      if (this.board.checkSnakeFoodCollision()) {
        this.score += 6
        if ( this.score > this.highScore) {
          this.highScore += 6
        }
        this.board.food.changePosition()
        this.board.snake.expand = true
      }
      this.draw()
    }
  }

  draw () {
    this.board.snake.move()
    this.ctx.beginPath()
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.fillStyle = 'black'
    this.ctx.fill()

    this.ctx.beginPath()
    this.ctx.rect(this.board.food.posX * this.board.tileWidth, this.board.food.posY * this.board.tileWidth, this.board.tileWidth, this.board.tileWidth)
    this.ctx.fillStyle = this.board.food.color
    this.ctx.fill()

    for (let i = 0; i < this.board.snake.tiles.length; i++) {
      this.ctx.beginPath()
      this.ctx.rect(this.board.snake.tiles[i].x * this.board.tileWidth, this.board.snake.tiles[i].y * this.board.tileWidth, this.board.tileWidth, this.board.tileWidth)
      this.ctx.fillStyle = this.board.snake.color
      this.ctx.fill()
    }

    this.showInfo('Score: ' + this.score + '  Highscore: ' + this.highScore, 4)
  }

  showInfo (text, position) {
    this.ctx.font = '27px Arial'
    this.ctx.fillStyle = 'white'
    this.ctx.textAlign = 'center'
    this.ctx.fillText(text, this.canvas.width / 2, this.canvas.height / 2 + position * 50)
  }

  checkIfSnakeCrashed () {
    return (this.board.snake.checkSelfCollision() || this.board.checkSnakeWallCollision())
  }

  gameOver () {
    this.showInfo('Game over! Score: ' + this.score, 0)
    this.reset()
  }

  reset () {
    this.score = 0
    this.board.snake.setTail(0, 0)
    this.board.snake.actualMoveDirection = 'right'
    this.paused = true
  }

  startInterval () {
    setInterval(this.animationFrame, 50)
  }
}
