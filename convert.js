let chessjs = require('chess.js');
let Chess = chessjs.Chess;
// FEN -> Array
// PGN -> Board

class Converter {
    constructor() {
        console.log("chess", Chess);
    }
}

module.exports = Converter;