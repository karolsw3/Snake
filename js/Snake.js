export class Snake {

  constructor (posX, posY, color) {
    this.color = color
    this.tiles = []
    this.setTail(posX, posY)
    this.actualMoveDirection = 'right'
    this.expand = false
  }

  setTail (posX, posY) {
    this.tiles = []
    for (let i = 0; i < 4; i++) {
      this.tiles.push({
        x: posX + i,
        y: posY
      })
    }
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

  checkSelfCollision () {
    let sortedTiles = this.tiles.slice().sort()
    for (let i = 0; i < sortedTiles.length - 1; i++) {
      if (JSON.stringify(this.getPosition()) === JSON.stringify(sortedTiles[i])) {
        return true
      }
    }
    return false
  }
}
