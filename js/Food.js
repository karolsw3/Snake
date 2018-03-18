class Food {
  constructor (maxX, maxY, color, tileWidth) {
    this.posX = Math.round(Math.random() * (maxX - 1))
    this.posY = Math.round(Math.random() * (maxY - 1))
    this.color = color
    this.tileWidth = tileWidth
  }

  getPosition () {
    return {
      x: this.posX,
      y: this.posY
    }
  }

  draw () {
    ctx.beginPath()
    ctx.rect(this.posX * this.tileWidth, this.posY * this.tileWidth, this.tileWidth, this.tileWidth)
    ctx.fillStyle = this.color
    ctx.fill()
  }
}
