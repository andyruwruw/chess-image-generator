# chess-image-generator

Creates **PNG or Buffers** from either **FEN**, **PGN** or **array data**.

Options allow you to choose the **size**, **colors** and **style of pieces**.

Outputs by either saving a **PNG** to given path, or with **Buffer**.

Uses `canvas`, `canvas-to-buffer`, `chess.js`, `fs` and `path`.

---

## Table of Contents
- [Features](#Features)
- [Installation](#Installation)
- [Loading in Board](#Loading-in-Board)
    - [FEN](#FEN-(`string`))
    - [PGN](#PGN-(`string`))
    - [Array of Characters](#Array-of-Characters-(`array`))
- [Generating Images](#Generating-Images)
    - [into Buffer](#into-Buffer)
    - [into PNG](#into-PNG)
- [Colors](#Colors)
- [Piece Styles](#Piece-Styles)
- [Methods](#Methods)
    - [constructor(options)](#constructor(options))
    - [.loadFEN(fen)](#.loadFEN(fen))
    - [.loadPGN(pgn)](#.loadPGN(pgn))
    - [.loadArray(array)](#.loadArray(array))
    - [.generateBuffer()](#.generateBuffer())
    - [.generatePNG(path)](#.generatePNG(path))

---

## Features
- [Select](#Installation):
    - Image Size (`pixels`) 
        - *Default: `480px` X `480px`*
    - [Light Square Color](#Colors) 
        - *Default: `"rgb(181, 136, 99)"`*
    - [Dark Square Color](#Colors) 
        - *Default: `"rgb(240, 217, 181)"`*
    - [Piece Image Style](#Piece-Styles) 
        - *Default: `"merida"`*
- [Load by](#Loading-in-Board):
    - [FEN](#FEN-(`string`))
    - [PGN](#PGN-(`string`))
    - [Array of Characters](#Array-of-Characters-(`array`))
- [Generate](#Generating-Images): 
    - [PNG Buffer](#into-Buffer)
    - [PNG File (w/ path)](#into-PNG)

---

## Installation

Install via node:

    $ npm install -S chess-image-generator

Then, in your javascript file
```
var ChessImageGenerator = require('chess-web-api');

var imageGenerator = new ChessImageGenerator();
```
or pass in options:
```
var imageGenerator = new ChessImageGenerator({
    size: 720,
    light: 'rgb(200, 200, 200)',
    dark: '#333333',
    style: 'merida'
});
```

---

## Loading in Board

Once you've created an instance of the `ChessImageGenerator`, load a board using one of three formats.

#### Formats
- [FEN](#FEN-(`string`))
- [PGN](#PGN-(`string`))
- [Array of Characters](#Array-of-Characters-(`array`))

---

### FEN (`string`)
Use the method `.loadFEN(fen)`.

FEN appears in the follow format: 
```
r2qk2r/p1p5/bpnbp2p/1N1p1p2/P2P1p1N/2PQ2P1/1P2PPBP/R4RK1 b kq - 1 13
```
Each piece is notated by a character.
- Pawn: `p`
- Biship: `b`
- Knight: `n`
- Rook: `r`
- Queen: `q`
- King: `k`

`Lowercase` letters are `black` pieces.

`Uppercase` letters are `white` pieces.

`Slashes` are where rows end.

`Numbers` count empty spaces.

The stuff at the end gets a little more complicated so [go here if you're interested](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation).

---

### PGN (`string`)
Use the method `.loadPGN(pgn)`.

PGN appears in the follow format:

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
It has a lot of different data, and can have more or less. But always has the moves in a list at the end. If you're [intersted in more go here](https://en.wikipedia.org/wiki/Portable_Game_Notation).

[Chess.com's Published-Data API](https://www.chess.com/news/view/published-data-api) returns games in this format. If you want to use their API check out the [chess-web-api](https://www.npmjs.com/package/chess-web-api) wrapper I created for it!.

---

### Array of Characters (`array`)
Use the method `.loadArray(array)`.

I added an option for a board stored in an array of arrays like so:
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

`Lowercase` letters are `black` pieces.

`Uppercase` letters are `white` pieces.

---

## Generating Images

#### into Buffer

#### into PNG

---

## Colors
Colors should be `strings`.

Within the `options` object you pass into the constructor, you can specify `light` and `dark` for the light and dark squares respectively.

```
var imageGenerator = new ChessImageGenerator({
    light: 'rgb(200, 200, 200)',
    dark: 'rgb(20, 20, 20)',
});
```

If both options are not given: 
- `light` will default to `"rgb(181, 136, 99)"`
- `dark` will default to `"rgb(181, 136, 99)"`

Acceptable Color Types are:
- Hexadecimal colors
    - ```Example: "#00ff00"```
- RGB colors
    - ```Example: "rgb(20, 20, 20)"```
- RGBA colors
    - ```Example: "rgba(20, 20, 20, .8)"```
- HSL colors
    - ```Example: "hsl(120, 100%, 50%)"```
- HSLA colors
    - ```Example: "hsla(120, 60%, 70%, 0.3)"```
- Predefined color names
    - ```Example: "red"```

---

## PieceStyles
Style should be a `string`.

Within the `options` object you pass into the constructor, you can specify `style`.

```
var imageGenerator = new ChessImageGenerator({
    style: 'alpha'
});
```

There are `five styles` to choose from:
- alpha
- cburnett
- cheq
- leipzig
- merida 

### alpha
![alpha](./src/resources/alpha/WhiteKing.png)
### cburnett
![cburnett](./src/resources/cburnett/WhiteKing.png)
### cheq
![cheq](./src/resources/cheq/WhiteKing.png)
### leipzig
![leipzig](./src/resources/leipzig/WhiteKing.png)
### merida
![merida](./src/resources/merida/WhiteKing.png)


---

## Methods

---

## constructor(options)

Inicializes a new instance of `ChessImageGenerator`.

#### Parameters
| Name    | Type     | Description          |
|---------|----------|----------------------|
| options | `object` | Object with options. |

---

## .loadFEN(fen)
Resets the `ChessImageGenerator`'s board and loads a new one via FEN.

#### Parameters
| Name    | Type     | Description          |
|---------|----------|----------------------|
| fen | `string` | Board FEN. |
---

## .loadPGN(pgn)
Resets the `ChessImageGenerator`'s board and loads a new one via PGN.

#### Parameters
| Name    | Type     | Description          |
|---------|----------|----------------------|
| pgn | `string` | Game PGN. |
---

## .loadArray(array)
Resets the `ChessImageGenerator`'s board and loads a new one via array of arrays.

#### Parameters
| Name    | Type     | Description          |
|---------|----------|----------------------|
| array | `array of arrays` | Board array with characters. |
---

## .generateBuffer()
Takes loaded board and generates `PNG` based on `options`. Returns them as a `buffer`.

#### Parameters `None`

#### Returns `Buffer`
---

## .generatePNG(path)
Takes loaded board and generates `PNG` based on `options`. Saves image to desired path.

#### Parameters
| Name    | Type     | Description          |
|---------|----------|----------------------|
| path | `string` | Path of where to save PNG, relative to method call. |

---
