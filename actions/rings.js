module.exports = {
  init: () => [],
  newRing: (rings, newRing) => rings.concat(newRing),
  update: (rings) => rings
    .map(ring => Object.assign({}, ring, {size: ring.size + 1}))
    .filter(ring => ring.size < 100)
  ,
  draw: (rings, ctx) => {
    rings.forEach(ring => {
      ctx.fillStyle = `rgb(138, 43, 226, ${(100 - ring.size)/100})`
      ctx.fillRect(ring.x - (ring.size/2), ring.y - (ring.size/2), ring.size, ring.size)
    })
    return rings
  }
}
