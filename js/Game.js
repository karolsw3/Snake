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
