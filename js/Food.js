export class Food {
  constructor (maxX, maxY, color) {
    this.maxX = maxX
    this.maxY = maxY
    this.posX = 0
    this.posY = 0
    this.color = color
    this.changePosition()
  }

  changePosition () {
    this.posX = Math.round(Math.random() * (this.maxX - 1))
    this.posY = Math.round(Math.random() * (this.maxY - 1))
  }

  getPosition () {
    return {
      x: this.posX,
      y: this.posY
    }
  }
}
