import { Snake } from './Snake.js'
import { Food } from './Food.js'

export class Board {
  constructor (sizeX, sizeY, tileWidth) {
    this.snake = new Snake(0, Math.round(sizeY / 2), '#83bcff')
    this.food = new Food(sizeX, sizeY, '#ffbc42')
    this.sizeX = sizeX
    this.sizeY = sizeY
    this.tileWidth = tileWidth
  }

  checkSnakeFoodCollision () {
    return (JSON.stringify(this.snake.getPosition()) === JSON.stringify(this.food.getPosition()))
  }

  checkSnakeWallCollision () {
    return (
      this.snake.getPosition().x >= this.sizeX ||
      this.snake.getPosition().x < 0 ||
      this.snake.getPosition().y >= this.sizeY ||
      this.snake.getPosition().y < 0
    )
  }
}
