class Game {
  constructor () {
    this.resize = this.resize.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.draw = this.draw.bind(this)
    this.board = new Board(20, 20, 17)
    window.addEventListener('resize', this.resize)
    window.addEventListener('keydown', this.onKeyDown)
    this.resize()
    this.startInterval()
    this.paused = true
  }

  resize () {
    canvas.width = this.board.sizeX * this.board.tileWidth
    canvas.height = this.board.sizeY * this.board.tileWidth
  }

  togglePause () {
    this.paused = !this.paused
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
        this.togglePause()
        break
    }
    this.draw()
  }

  draw () {
    if (this.checkIfSnakeCrashed()) {
      this.gameOver()
    } else if (this.paused) {
      ctx.font = '27px Arial'
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.fillText('Press space to resume', canvas.width / 2, canvas.height / 2)
    } else {
      this.board.snake.move()
      ctx.beginPath()
      ctx.rect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'black'
      ctx.fill()
      this.board.draw()
    }
  }

  checkIfSnakeCrashed () {
    return this.board.snake.crashed
  }

  gameOver () {
    window.alert('Game over!')
    this.board.snake = new Snake(0, 0, '#ff22ff', this.board.tileWidth)
  }

  startInterval () {
    setInterval(this.draw, 200)
  }
}
