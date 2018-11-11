const HoverEngine = require('hover-engine')
const engine = new HoverEngine()

// get canvas object for canvas actions
const canvas = document.getElementById('game-canvas')

engine.addActions({
  canvas: require('./actions/canvas')(canvas),
  ticker: require('./actions/ticker'),
  cursor: require('./actions/cursor'),
  rings: require('./actions/rings')
})

engine.actions.initDraw()
window.onmousemove = event => {
  engine.actions.moveCursor({x: event.x, y: event.y})
  engine.actions.newRing({x: event.x, y: event.y, size: 5})
}
