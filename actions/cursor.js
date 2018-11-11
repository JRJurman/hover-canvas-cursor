module.exports = {
  init: () => ({x: 0, y: 0}),
  moveCursor: (cursor, newCursor) => newCursor,
  draw: (cursor, ctx) => {
    ctx.fillStyle = 'rgb(138, 43, 226)'
    ctx.fillRect(cursor.x - 10, cursor.y - 10, 10, 10)
    return cursor
  }
}
