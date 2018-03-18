class Board {
  constructor (sizeX, sizeY, tileWidth) {
    this.snake = new Snake(0, 0, '#ff22ff', tileWidth)
    this.food = new Food(sizeX, sizeY, '#ff4422', tileWidth)
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
    this.checkCollision()
    this.snake.draw()
    this.food.draw()
  }

  checkCollision () {
    if (this.snake.getPosition().x >= this.sizeX ||
       this.snake.getPosition().x < 0 ||
       this.snake.getPosition().y >= this.sizeY ||
       this.snake.getPosition().y < 0
    ) {
      window.alert('Game over!')
      this.snake = new Snake(0, 0, '#ff22ff', this.tileWidth)
    }

    if (JSON.stringify(this.snake.getPosition()) === JSON.stringify(this.food.getPosition()) ) {
      this.snake.expand = true
      this.food = new Food(this.sizeX, this.sizeY, '#ff4422', this.tileWidth)
    }
  }
}