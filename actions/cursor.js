module.exports = {
  init: () => ({x: 0, y: 0}),
  moveCursor: (cursor, newCursor) => newCursor,
  draw: (cursor, ctx) => {
    ctx.fillStyle = 'rgb(0, 0, 0)'
    ctx.fillRect(cursor.x, cursor.y, 2, 2)
    return cursor
  }
}
