'use strict';
const { createCanvas, loadImage } = require('canvas');
var Frame  = require('canvas-to-buffer');
var Chess = require('chess.js').Chess;
const fs = require('fs');
const path = require("path");

function ChessImageGenerator(options) {
    try {
        this.chess = new Chess();
        let actualOptions = options ? options : {};
        this.size = actualOptions.size ? actualOptions.size : 480;
        this.light = actualOptions.light ? actualOptions.light : 'rgb(181, 136, 99)';
        this.dark = actualOptions.dark ? actualOptions.dark : 'rgb(240, 217, 181)';
        this.style = actualOptions.style ? actualOptions.style : 'merida';
        this.ready = false;
    } catch(error) {
        throw error;
    }
    
}

ChessImageGenerator.prototype = {
    loadPGN: async function(pgn) {
        try {
            await this.chess.load_pgn(pgn);
            this.ready = true;
        } catch(error) {
            throw error;
        }
    },

    loadFEN: async function(fen) {
        try {
            await this.chess.load(fen);
            this.ready = true;
        } catch(error) {
            throw error;
        }
    },

    loadArray: function(array) {
        try {
            this.chess.clear();
            let cols = "abcdefgh";
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    let white = "PBNRQK";
                    let black = "pbnrqk";
                    if (white.indexOf(array[i][j]) != -1 && array[i][j] != "") {
                        this.chess.put({ type: array[i][j].toLowerCase(), color: 'w'}, (cols[j] + (8 - i)));
                    } else if (black.indexOf(array[i][j]) != -1 && array[i][j] != "") {
                        this.chess.put({ type: array[i][j].toLowerCase(), color: 'b'}, (cols[j] + (8 - i)));
                    }
                }
            }
            this.ready = true;
        } catch(error) {
            throw error;
        }
    },

    generateBuffer: async function() {
        if (!this.ready) throw "load a board first";
        try {
            const canvas = createCanvas(this.size, this.size);
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.rect(0, 0, this.size, this.size);
            ctx.fillStyle = this.light;
            ctx.fill();
            let cols = "abcdefgh";
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    if ((i + j) % 2 == 0) {
                        ctx.beginPath();
                        ctx.rect(((this.size / 8) * j), ((this.size / 8) * i), (this.size / 8), (this.size / 8));
                        ctx.fillStyle = this.dark;
                        ctx.fill();
                    }
                    let piece = this.chess.get(cols[7 - j] + ((7 - i) + 1));
                    let image;
                    if (piece == null) {
                        continue;
                    } else if (piece.type == "p" && piece.color == "w") {
                        image = 'resources/' + this.style + '/WhitePawn.png'
                    } else if (piece.type == "p" && piece.color == "b") {
                        image = 'resources/' + this.style + '/BlackPawn.png';
                    } else if (piece.type == "b" && piece.color == "w") {
                        image = 'resources/' + this.style + '/WhiteBishop.png';
                    } else if (piece.type == "b" && piece.color == "b") {
                        image = 'resources/' + this.style + '/BlackBishop.png';
                    } else if (piece.type == "n" && piece.color == "w") {
                        image = 'resources/' + this.style + '/WhiteKnight.png';
                    } else if (piece.type == "n" && piece.color == "b") {
                        image = 'resources/' + this.style + '/BlackKnight.png';
                    } else if (piece.type == "r" && piece.color == "w") {
                        image = 'resources/' + this.style + '/WhiteRook.png';
                    } else if (piece.type == "r" && piece.color == "b") {
                        image = 'resources/' + this.style + '/BlackRook.png';
                    } else if (piece.type == "q" && piece.color == "w") {
                        image = 'resources/' + this.style + '/WhiteQueen.png';
                    } else if (piece.type == "q" && piece.color == "b") {
                        image = 'resources/' + this.style + '/BlackQueen.png';
                    } else if (piece.type == "k" && piece.color == "w") {
                        image = 'resources/' + this.style + '/WhiteKing.png';
                    } else if (piece.type == "k" && piece.color == "b") {
                        image = 'resources/' + this.style + '/BlackKing.png';
                    } else {
                        continue;
                    }
                    if (image) {
                        let img = await loadImage(path.join(__dirname, image));
                        await ctx.drawImage(img, ((this.size / 8) * j) + (this.size / 200), ((this.size / 8) * i) + (this.size / 200), (this.size / 8) - (this.size / 100), (this.size / 8) - (this.size / 100));
                    }
                }
            }
            let frame  = new Frame(canvas, {
                image: {
                    types: ['png']
                }
            });
            let buffer = frame.toBuffer();
            return buffer;
        } catch(error) {
            throw error;
        }
    },

    generatePNG: async function(path) {
        try {
            let buffer = await this.generateBuffer();
            fs.open(path, 'w', function(err, fd) {
                if (err) throw 'could not open file: ' + err;
                fs.write(fd, buffer, 0, buffer.length, null, function(err) {
                    if (err) throw 'error writing file: ' + err;
                    fs.close(fd, function() {
                        return path;
                    });
                });
            });
        } catch (error) {
            throw error;
        }
    },
};

module.exports = ChessImageGenerator;