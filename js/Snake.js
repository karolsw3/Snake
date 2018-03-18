class Snake {
  constructor (posX, posY, color, tileWidth) {
    this.color = color
    this.tiles = []
    for (let i = 0; i < 4; i++) {
      this.tiles.push({
        x: posX + i,
        y: 0
      })
    }
    this.tileWidth = tileWidth
    this.actualMoveDirection = 'right'
    this.expand = false
  }

  getPosition () {
    return {
      x: this.tiles[this.tiles.length - 1].x,
      y: this.tiles[this.tiles.length - 1].y
    }
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

    if (this.expand) {
      this.expand = false
    } else {
      this.tiles.shift()
    }
  }

  draw () {
    for (let i = 0; i < this.tiles.length; i++) {
      ctx.beginPath()
      ctx.rect(this.tiles[i].x * this.tileWidth, this.tiles[i].y * this.tileWidth, this.tileWidth, this.tileWidth)
      ctx.fillStyle = this.color
      ctx.fill()
    }
  }

  checkSelfCollision () {
    let sortedTiles = this.tiles.slice().sort()
    for(let i = 0; i < sortedTiles.length - 1; i++) {
      if (JSON.stringify (this.getPosition()) === JSON.stringify(sortedTiles[i])) {
        return true
      }
    }
    return false
  }
}