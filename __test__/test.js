let ChessImageGenerator = require('../src/index.js');

let runTests = async function() {
    try {
        let tests = [
            {description: "Options: None, Type: FEN", size: null, light: null, dark: null, array: null, pgn: null, fen: "r2qk2r/p1p5/bpnbp2p/1N1p1p2/P2P1p1N/2PQ2P1/1P2PPBP/R4RK1 b kq - 1 13"},
            {description: "Options: Size 720, Type: FEN", size: 720, light: null, dark: null, array: null, pgn: null, fen: "r2qk2r/p1p5/bpnbp2p/1N1p1p2/P2P1p1N/2PQ2P1/1P2PPBP/R4RK1 b kq - 1 13"},
            {description: "Options: Colors, Type: FEN", size: null, light: 'rgb(200, 200, 200)', dark: 'rgb(75,75,75)', array: null, pgn: null, fen: "r2qk2r/p1p5/bpnbp2p/1N1p1p2/P2P1p1N/2PQ2P1/1P2PPBP/R4RK1 b kq - 1 13"},
            {description: "Options: Colors 2, Type: FEN", size: null, light: 'rgb(40,0,0)', dark: 'rgb(76,15,10)', array: null, pgn: null, fen: "r2qk2r/p1p5/bpnbp2p/1N1p1p2/P2P1p1N/2PQ2P1/1P2PPBP/R4RK1 b kq - 1 13"},
            {description: "Options: None, Type: PGN", size: null, light: null, dark: null, array: null, pgn: "[Event \"Let's Play!\"]\n[Site \"Chess.com\"]\n[Date \"2019.12.19\"]\n[Round \"2\"]\n[White \"erik\"]\n[Black \"benjammin21052\"]\n[Result \"*\"]\n[ECO \"C46\"]\n[ECOUrl \"https://www.chess.com/openings/Three-Knights-Opening\"]\n[CurrentPosition \"r5r1/4kpp1/7p/2R1Q3/1p2p3/1p2N2P/b1P3P1/7K b - - 1 45\"]\n[Timezone \"UTC\"]\n[UTCDate \"2019.12.19\"]\n[UTCTime \"23:01:25\"]\n[WhiteElo \"1627\"]\n[BlackElo \"1523\"]\n[TimeControl \"1/432000\"]\n[StartTime \"23:01:25\"]\n[Link \"https://www.chess.com/daily/game/245462524\"]\n\n1. e4 {[%clk 119:59:58]} 1... e5 {[%clk 119:56:18]} 2. Nf3 {[%clk 118:03:29]} 2... Nc6 {[%clk 119:31:25]} 3. Nc3 {[%clk 119:54:17]} 3... Bc5 {[%clk 99:13:43]} 4. Nxe5 {[%clk 118:19:05]} 4... Bxf2+ {[%clk 119:07:13]} 5. Kxf2 {[%clk 119:46:37]} 5... Nxe5 {[%clk 115:51:00]} 6. d4 {[%clk 119:24:50]} 6... Qf6+ {[%clk 110:21:42]} 7. Kg1 {[%clk 119:55:38]} 7... Ng6 {[%clk 119:53:21]} 8. Be3 {[%clk 119:56:22]} 8... d6 {[%clk 92:54:16]} 9. Nd5 {[%clk 119:20:47]} 9... Qd8 {[%clk 119:53:54]} 10. Bd3 {[%clk 119:40:05]} 10... c6 {[%clk 119:58:04]} 11. Nc3 {[%clk 119:25:46]} 11... Nf6 {[%clk 3:28:12]} 12. h3 {[%clk 117:03:55]} 12... Be6 {[%clk 25:16:50]} 13. Kh2 {[%clk 118:53:28]} 13... Qd7 {[%clk 74:17:16]} 14. Rf1 {[%clk 112:36:27]} 14... Qc7 {[%clk 24:46:02]} 15. Kg1 {[%clk 118:26:15]} 15... Qd7 {[%clk 119:20:15]} 16. Bg5 {[%clk 119:11:04]} 16... Qe7 {[%clk 117:31:20]} 17. d5 {[%clk 113:13:24]} 17... Bd7 {[%clk 113:06:20]} 18. Qd2 {[%clk 117:20:46]} 18... h6 {[%clk 119:35:36]} 19. Be3 {[%clk 119:23:33]} 19... Ne5 {[%clk 119:39:15]} 20. Rae1 {[%clk 112:13:04]} 20... Nxd3 {[%clk 107:14:26]} 21. Qxd3 {[%clk 98:47:13]} 21... b6 {[%clk 18:12:45]} 22. dxc6 {[%clk 118:58:21]} 22... Bxc6 {[%clk 117:24:35]} 23. e5 {[%clk 119:50:09]} 23... dxe5 {[%clk 104:00:26]} 24. Bf4 {[%clk 118:33:11]} 24... e4 {[%clk 69:56:53]} 25. Qg3 {[%clk 119:57:46]} 25... Rg8 {[%clk 27:07:08]} 26. Bd6 {[%clk 119:56:25]} 26... Qe6 {[%clk 118:54:55]} 27. Ne2 {[%clk 119:36:56]} 27... Nh5 {[%clk 97:13:52]} 28. Qa3 {[%clk 116:11:25]} 28... Qc4 {[%clk 101:46:47]} 29. Nc3 {[%clk 118:43:19]} 29... a5 {[%clk 49:25:43]} 30. Rf5 {[%clk 118:20:40]} 30... Nf6 {[%clk 118:36:35]} 31. Re5+ {[%clk 119:55:53]} 31... Kd8 {[%clk 73:32:05]} 32. Rd1 {[%clk 118:25:35]} 32... Kc8 {[%clk 118:32:13]} 33. Re7 {[%clk 118:57:50]} 33... Nd7 {[%clk 119:14:22]} 34. Rf1 {[%clk 119:53:43]} 34... b5 {[%clk 119:46:44]} 35. Nd1 {[%clk 119:56:19]} 35... Qd4+ {[%clk 119:34:46]} 36. Kh1 {[%clk 119:39:31]} 36... b4 {[%clk 119:52:57]} 37. Qg3 {[%clk 117:47:58]} 37... Bd5 {[%clk 101:42:23]} 38. Ne3 {[%clk 118:21:45]} 38... Bxa2 {[%clk 119:37:38]} 39. Rd1 {[%clk 119:47:20]} 39... Qa7 {[%clk 119:43:30]} 40. b3 {[%clk 119:53:12]} 40... a4 {[%clk 119:10:50]} 41. Bc5 {[%clk 119:58:28]} 41... Qxc5 {[%clk 119:58:19]} 42. Rdxd7 {[%clk 119:54:12]} 42... axb3 {[%clk 119:31:58]} 43. Rc7+ {[%clk 118:06:02]} 43... Kd8 {[%clk 119:50:48]} 44. Rxc5 {[%clk 119:58:03]} 44... Kxe7 {[%clk 106:24:45]} 45. Qe5+ {[%clk 117:27:13]} *", fen: null},
            {description: "Options: None, Type: Array", size: null, light: null, dark: null, array: [['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'], ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'], ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'], ], pgn: null, fen: null},
        ];
        for (let i = 0; i < tests.length; i++) {
            console.log("Test", i + 1, ":", tests[i].description);
            let imageGenerator = await new ChessImageGenerator({
                size: tests[i].size,
                light: tests[i].light,
                dark: tests[i].dark,
                style: 'merida'
            });
            if (tests[i].fen != null) {
                await imageGenerator.loadFEN(tests[i].fen);
            } else if (tests[i].pgn != null) {
                await imageGenerator.loadPGN(tests[i].pgn);
            } else if (tests[i].array != null) {
                await imageGenerator.loadArray(tests[i].array);
            }
            await imageGenerator.generatePNG('test' + (i + 1) + '.png');
            
        } 
    } catch(error) {
        console.log(error);
    }
}

runTests();

