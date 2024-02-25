<div align="center">
    <img width="400" align="center"src="./documentation/logo.png"/><br/>
</div>

<p align="center">Create PNG or Buffers of Chess Positions.</p>

<p align="center" style="margin: 0px auto; margin-top: 15px; max-width: 600px">
    <a href="https://www.npmjs.com/package/chess-fen2img"><img src="https://img.shields.io/npm/v/chess-fen2img"></a>
    <a href="#"><img src="https://img.shields.io/npm/dt/chess-fen2img"/></a>
</p>

# Why pick this over original package?

Cause you can generate more visually appealing Chess Boards with the new added pieces!

<div style="display:flex; justify-content: center; align-items: center; gap: 10px;">
<div>
 <h4>Pieces: Neo<br>Light: <span style="color: #EEEED2;">#EEEED2</span><br>Dark: <span style="color: #769657;">#769657</span></h4>
    <img width="300" height="300" src="./documentation/neo-board.png">
</div>

<div>
 <h4>Pieces: Glass<br>Light: <span style="color: #D9E2E8;">#D9E2E8</span><br>Dark: <span style="color: #7093A9;">#7093A9</span></h4>
    <img width="300" height="300" src="./documentation/glass-board.png">
</div>
<div>
 <h4>Pieces: Game Room<br>Light: <span style="color: #91B5A4;">#91B5A4</span><br>Dark: <span style="color: #6E9281;">#6E9281</span></h4>
    <img width="300" height="300" src="./documentation/game_room-board.png">
</div>
<div>
 <h4>Pieces: Wood<br>Light: <span style="color: #F0D9B5;">#F0D9B5</span><br>Dark: <span style="color: #B58863;">#B58863</span></h4>
    <img width="300" height="300" src="./documentation/wood-board.png">
</div>   
        
</div>

# Overview

chess-fen2img creates a **PNG file** or **PNG Buffer** from either a:

- FEN
- PGN
- array data

Passed in options allow you to choose:

- size of the canvas
- colors of board
- style of pieces

Output to either:

- a PNG to given path
- PNG Buffer

# Documentation

- [Installation](#installation)
- [Loading in a Chess Position](#loading-in-a-chess-position)
  - [FEN](#loading-by-fen)
  - [PGN](#loading-by-pgn)
  - [Array of Characters](#loading-by-array)
  - [Highlighting Squares](#highlighting-squares)
- [Generating Images](#generate-an-image)
  - [into PNG](#generate-a-png)
  - [into Buffer](#generate-a-buffer)
- [Image Customization](#image-customization)
  - [Canvas Size](#canvas-size)
  - [Padding](#padding)
  - [Board Colors](#board-colors)
  - [Piece Style](#piece-style)
  - [Board POV](#board-pov)
  - [Rank & File Notations](#notations)
- [Dependencies](#dependencies)

# Installation

> [!CAUTION]
> Version 1.0.0 may not work so make sure to install Version 1.0.1 & above only.

Install via node:

    $ npm i -S chess-fen2img

Then import the package and instantiate:

```
var ChessImageGenerator = require('chess-fen2img');

var imageGenerator = new ChessImageGenerator();
```

or pass in [options for customization](#image-customization):

```
var ChessImageGenerator = require('chess-fen2img');

var imageGenerator = new ChessImageGenerator({
    size: 720,
    light: 'rgb(200, 200, 200)',
    dark: '#333333',
    style: 'merida',
    flipped: true,
    notations: true,
});
```

Load in your chess position with [one of three methods](#loading-in-a-chess-position) depending on the format of your board position, and [export to PNG file or Buffer](#generate-an-image).

# Loading in a Chess Position

Once you've created an instance of the chess-fen2img, you can load a chess position using one of three formats.

### Available Formats

- [Forsyth–Edwards Notation (FEN)](#loading-by-fend)
- [Portable Game Notation (PGN)](#loading-by-pgn)
- [Array of Characters](#loading-by-array)

# Loading By FEN

```
.loadFEN(fen)
```

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| fen       | `string` | Board FEN.  |

FEN appears in the follow [format](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation):

```
r2qk2r/p1p5/bpnbp2p/1N1p1p2/P2P1p1N/2PQ2P1/1P2PPBP/R4RK1 b kq - 1 13
```

Each piece is notated by a character.

| Char           | Value                   | Example            |
| -------------- | ----------------------- | ------------------ |
| Uppercase Char | _White Pieces_          | _K, Q, R, B, N, P_ |
| Lowercase Char | _Black Pieces_          | _k, q, r, b, n, p_ |
| Slash          | _New Row_               | _/_                |
| Numbers        | _Count of blank spaces_ | _3, 1, 4_          |

# Loading by PGN

```
.loadPGN(pgn)
```

| Parameter | Type       | Description |
| --------- | ---------- | ----------- |
| pgn       | **string** | Game PGN.   |

PGN appears in the follow [format](https://en.wikipedia.org/wiki/Portable_Game_Notation):

```
[Event "F/S Return Match"]
[Site "Belgrade, Serbia JUG"]
[Date "1992.11.04"]
[Round "29"]
[White "Fischer, Robert J."]
[Black "Spassky, Boris V."]
[Result "1/2-1/2"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 {This opening is called the Ruy Lopez.}
4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7
11. c4 c6 12. cxb5 axb5 13. Nc3 Bb7 14. Bg5 b4 15. Nb1 h6 16. Bh4 c5 17. dxe5
Nxe4 18. Bxe7 Qxe7 19. exd6 Qf6 20. Nbd2 Nxd6 21. Nc4 Nxc4 22. Bxc4 Nb6
23. Ne5 Rae8 24. Bxf7+ Rxf7 25. Nxf7 Rxe1+ 26. Qxe1 Kxf7 27. Qe3 Qg5 28. Qxg5
hxg5 29. b3 Ke6 30. a3 Kd6 31. axb4 cxb4 32. Ra5 Nd5 33. f3 Bc8 34. Kf2 Bf5
35. Ra7 g6 36. Ra6+ Kc5 37. Ke1 Nf4 38. g3 Nxh3 39. Kd2 Kb5 40. Rd6 Kc5 41. Ra6
Nf2 42. g4 Bd3 43. Re6 1/2-1/2
```

[Chess.com's Published-Data API](https://www.chess.com/news/view/published-data-api) returns games in this format. If you want to use their API check out the [chess-web-api](https://www.npmjs.com/package/chess-web-api) wrapper I created for it!.

# Loading by Array

```
.loadArray(array)
```

| Parameter | Type              | Description                  |
| --------- | ----------------- | ---------------------------- |
| array     | `array of arrays` | Board array with characters. |

Array should be passed with the following format:

```
[
    ['r','n','b','q','k','b','n','r',],
    ['p','p','p','p','p','p','p','p',],
    [' ',' ',' ',' ',' ',' ',' ',' ',],
    [' ',' ',' ',' ',' ',' ',' ',' ',],
    [' ',' ',' ',' ',' ',' ',' ',' ',],
    [' ',' ',' ',' ',' ',' ',' ',' ',],
    ['P','P','P','P','P','P','P','P',],
    ['R','N','B','Q','K','B','N','R',],
]
```

Piece notation follows the same rules as [FEN](#loading-by-fen).

| Char           | Value          | Example            |
| -------------- | -------------- | ------------------ |
| Uppercase Char | _White Pieces_ | _K, Q, R, B, N, P_ |
| Lowercase Char | _Black Pieces_ | _k, q, r, b, n, p_ |

# Highlighting Squares

```
.highlightSquares(array)
```

| Parameter | Type               | Description                        |
| --------- | ------------------ | ---------------------------------- |
| array     | `array of strings` | Array of coordinates to highlight. |

### Example:

```
imageGenerator.highlightSquares(["e4", "e5"])
```

# Generate an Image

After you've loaded a chess position into an instance of the chess-fen2img, use the following functions to generate your image with one of two outputs:

- [PNG with Path](#generate-a-png)
- [PNG Buffer](#generate-a-buffer)

# Generate a PNG

```
.generatePNG(path)
```

The path should be relative to where it is called and include the end name of the PNG.

A new PNG file will be generated with position.

| Parameter | Type       | Description                                         |
| --------- | ---------- | --------------------------------------------------- |
| path      | **string** | Path of where to save PNG, relative to method call. |

| Return Type | Return Description |
| ----------- | ------------------ |
| `string`    | Path to PNG        |

# Generate a Buffer

```
.generateBuffer()
```

The buffer will be returned from the function. Use promises or async await to ensure its completion.

| Return Type | Return Description |
| ----------- | ------------------ |
| `Buffer`    | PNG Buffer         |

# Image Customization

You have several options for customization of the resulting PNG:

- [Canvas Size](#canvas-size)
- [Padding](#padding)
- [Board Colors](#board-colors)
- [Piece Style](#piece-style)
- [Board POV](#board-pov)
- [Rank & File Notations](#notations)

These customizations are passed to the constructor when you create an instance of chess-fen2img:

```
var imageGenerator = new ChessImageGenerator({
    size: 720,
    padding: [10, 10, 10, 10],
    light: 'rgb(200, 200, 200)',
    dark: '#333333',
    style: 'merida',
    flipped: true,
    notations: true,
});
```

# Canvas Size

| Option | Type     | Default | Example          |
| ------ | -------- | ------- | ---------------- |
| size   | `number` | _480_   | _250, 800, 1200_ |

Canvas size determines in **pixels** how large the resulting PNG will be.

### Example:

```
var imageGenerator = new ChessImageGenerator({
    size: 1200,
});
```

The resulting PNG's will be 1200px by 1200px.

# Padding

| Option  | Type    | Default   | Example       |
| ------- | ------- | --------- | ------------- |
| padding | `array` | [0,0,0,0] | [10,10,10,10] |

Padding determines in **pixels** how much padding is added to each side of the board. The values are in order of top, right, bottom and left.

### Example:

```
var imageGenerator = new ChessImageGenerator({
    padding: [10,10,10,10],
});
```

The resulting PNG's will have a padding of 10px on each side, increasing the image width and height by 20px.

# Board Colors

| Option    | Type     | Default                    | Example                                  |
| --------- | -------- | -------------------------- | ---------------------------------------- |
| light     | `string` | _"rgb(240, 217, 181)"_     | _"rgb(250,250,250)", "white", "#ffffff"_ |
| dark      | `string` | _"rgb(181, 136, 99)"_      | _"rgb(0,0,0)", "black", "#000000"_       |
| highlight | `string` | _"rgba(235, 97, 80, 0.8)"_ | _"rgb(255,0,0)", "red", "#ff0000"_       |

Light and dark determines the colors of both the light and dark squares respectively. Highlight determines the color overlaid on top of any highlighted squares (using a RGBA value with some transparency is recommended so that light and dark squares are still distinguishable from one another if highlighted).

Colors can be passed in a variety of formats:

| Color Type             | Example                      |
| ---------------------- | ---------------------------- |
| Hexadecimal Color      | _"#00FF00"_                  |
| RGB Color              | _"rgb(20, 20, 20)"_          |
| RGBA Color             | _"rgba(20, 20, 20, .8)"_     |
| HSL Color              | _"hsl(120, 100%, 50%)"_      |
| HSLA Color             | _"hsla(120, 60%, 70%, 0.3)"_ |
| Predefined Color Names | _"blue"_                     |

## Default Coloring:

<p align="">
    <img width="300" src="./documentation/colors1.png">
</p>

## Customized Coloring:

<p align="">
    <img width="300" src="./documentation/neo-board.png">
</p>

### Example:

```
var imageGenerator = new ChessImageGenerator({
    style: "neo",
    light: '#EEEED2',
    dark: '#769657',
});
```

# Piece Style

| Option | Type     | Default    | Example         |
| ------ | -------- | ---------- | --------------- |
| style  | _string_ | _"merida"_ | _"neo", "wood"_ |

The piece style determines the used style of pieces to create the image.

# Board POV

| Option  | Type      | Default | Example       |
| ------- | --------- | ------- | ------------- |
| flipped | `boolean` | _false_ | _true, false_ |

Determines if the board should be flipped.  
If set to `false`, the image will be from white's point of view.
If set to `true`, the image will be from black's point of view.

# Rank & File Notations

> [!NOTE]  
> Padding must stay false or default value for Notations to work.

| Option    | Type      | Default | Example       |
| --------- | --------- | ------- | ------------- |
| notations | `boolean` | _false_ | _true, false_ |

Determines if the board should have Rank & File Notations.

<p align="">
    <img width="300" src="./documentation/neo-board-notations.png">
</p>

### Example:

```
var imageGenerator = new ChessImageGenerator({
    style: "neo",
    light: '#EEEED2',
    dark: '#769657',
    flipped: true,
    notations: true,
});
```

## Style Choices:

- neo

<div style="flex">
    <img width="60" src="./src/resources/neo/BlackKing.png">
    <img width="60" src="./src/resources/neo/WhiteQueen.png">
    <img width="60" src="./src/resources/neo/BlackRook.png">
    <img width="60" src="./src/resources/neo/WhiteKnight.png">
    <img width="60" src="./src/resources/neo/BlackBishop.png">
    <img width="60" src="./src/resources/neo/WhitePawn.png">
</div>

- game_room

<div style="flex">
    <img width="60" src="./src/resources/game_room/BlackKing.png">
    <img width="60" src="./src/resources/game_room/WhiteQueen.png">
    <img width="60" src="./src/resources/game_room/BlackRook.png">
    <img width="60" src="./src/resources/game_room/WhiteKnight.png">
    <img width="60" src="./src/resources/game_room/BlackBishop.png">
    <img width="60" src="./src/resources/game_room/WhitePawn.png">
</div>

- glass

<div style="flex">
    <img width="60" src="./src/resources/glass/BlackKing.png">
    <img width="60" src="./src/resources/glass/WhiteQueen.png">
    <img width="60" src="./src/resources/glass/BlackRook.png">
    <img width="60" src="./src/resources/glass/WhiteKnight.png">
    <img width="60" src="./src/resources/glass/BlackBishop.png">
    <img width="60" src="./src/resources/glass/WhitePawn.png">
</div>

- wood

<div style="flex">
    <img width="60" src="./src/resources/wood/BlackKing.png">
    <img width="60" src="./src/resources/wood/WhiteQueen.png">
    <img width="60" src="./src/resources/wood/BlackRook.png">
    <img width="60" src="./src/resources/wood/WhiteKnight.png">
    <img width="60" src="./src/resources/wood/BlackBishop.png">
    <img width="60" src="./src/resources/wood/WhitePawn.png">
</div>

- alpha

<div style="flex">
    <img width="60" src="./src/resources/alpha/BlackKing.png">
    <img width="60" src="./src/resources/alpha/WhiteQueen.png">
    <img width="60" src="./src/resources/alpha/BlackRook.png">
    <img width="60" src="./src/resources/alpha/WhiteKnight.png">
    <img width="60" src="./src/resources/alpha/BlackBishop.png">
    <img width="60" src="./src/resources/alpha/WhitePawn.png">
</div>

- cburnett

<div style="flex">
    <img width="60" src="./src/resources/cburnett/BlackKing.png">
    <img width="60" src="./src/resources/cburnett/WhiteQueen.png">
    <img width="60" src="./src/resources/cburnett/BlackRook.png">
    <img width="60" src="./src/resources/cburnett/WhiteKnight.png">
    <img width="60" src="./src/resources/cburnett/BlackBishop.png">
    <img width="60" src="./src/resources/cburnett/WhitePawn.png">
</div>

- cheq

<div style="flex">
    <img width="60" src="./src/resources/cheq/BlackKing.png">
    <img width="60" src="./src/resources/cheq/WhiteQueen.png">
    <img width="60" src="./src/resources/cheq/BlackRook.png">
    <img width="60" src="./src/resources/cheq/WhiteKnight.png">
    <img width="60" src="./src/resources/cheq/BlackBishop.png">
    <img width="60" src="./src/resources/cheq/WhitePawn.png">
</div>

- leipzig

<div style="flex">
    <img width="60" src="./src/resources/leipzig/BlackKing.png">
    <img width="60" src="./src/resources/leipzig/WhiteQueen.png">
    <img width="60" src="./src/resources/leipzig/BlackRook.png">
    <img width="60" src="./src/resources/leipzig/WhiteKnight.png">
    <img width="60" src="./src/resources/leipzig/BlackBishop.png">
    <img width="60" src="./src/resources/leipzig/WhitePawn.png">
</div>

- merida

<div style="flex">
    <img width="60" src="./src/resources/merida/BlackKing.png">
    <img width="60" src="./src/resources/merida/WhiteQueen.png">
    <img width="60" src="./src/resources/merida/BlackRook.png">
    <img width="60" src="./src/resources/merida/WhiteKnight.png">
    <img width="60" src="./src/resources/merida/BlackBishop.png">
    <img width="60" src="./src/resources/merida/WhitePawn.png">
</div>

All images were found at [Marcel van Kervinck](https://marcelk.net/chess/pieces/) & [GiorgioMegrelli](https://github.com/GiorgioMegrelli/chess.com-boards-and-pieces)!

### Example:

```
var imageGenerator = new ChessImageGenerator({
    style: alpha,
});
```

# Dependencies

- [canvas](https://www.npmjs.com/package/canvas)
- [canvas-to-buffer](https://www.npmjs.com/package/canvas-to-buffer)
- [chess.js](https://www.npmjs.com/package/chess.js)
- [fs](https://www.npmjs.com/package/fs)
- [path](https://www.npmjs.com/package/path)

---

## Hope you make some cool stuff!
