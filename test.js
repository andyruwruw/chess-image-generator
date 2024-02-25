const ChessImageGenerator = require(".");

const imageGenerator = new ChessImageGenerator({
  style: "neo",
  light: '#EEEED2',
  dark: '#769657',
  flipped: true,
  notations: true,
  size: 720,
});

var fen = `r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 1`;
imageGenerator.loadFEN(fen);
imageGenerator.generatePNG("test.png");
