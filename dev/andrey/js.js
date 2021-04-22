var t = new Array(9);

// todo: create a cointoss for deciding who moves first.

/*



*/
const GameStatus = Object.freeze({"player_1_win": 1, "player_2_win": 2, "tie": 3, "in_progress": 4})
const Player = Object.freeze({"player_1": 1, "player_2": 2})

// todo: add variable board size? M * N  (3 * 3)

function getCoordByPos(pos) {
    // todo @andrey
    // using M, N - board size
    throw Error("Not Implemented")
    // transform single pos in array into two coords: (x,y)#
    // return x, y // or {'x': x, 'y': y}
}

// 3* 3
// [ (0,0), (0, 1), (0,2)]
// [ (1,0), ..]
// [ (2,0), ..]

// [ 0 ,1 ,2 ]
// [ 3, 4, 5]
// [6, 7, 8]


function getPosByCoord(coord_x, coord_y) {
    // todo @andrey
    throw Error("Not Implemented")
    // transform  two coords: (x,y) single pos in array int
}

function getGameStatus(boardState, num_in_row_to_win = 3) { // win, loss, tie or in progress
    // todo @andrey
    throw Error("Not Implemented")
    // todo: return one of 4 game states
    // check vertical win
    // check diagonal win /
    // check diagonal win \
    // check horisontal win
}

function modifyBoardState(boardState, move, player) {
    throw Error("Not Implemented")
    // todo: make a move
}


function canWin(boardState, player) {// num_moves
    // we assume the player just made a move and check if he can win later
    // todo: check board consistency - can be that board state and that player move

    let gameStatus = getGameStatus(boardState);
    if (gameStatus !== GameStatus.in_progress) { // game is over, process exit
        return (player === Player.player_1 && gameStatus === GameStatus.player_1_win) || (player === Player.player_2 && gameStatus === GameStatus.player_2_win);
    }
    throw Error("Not Implemented")
}

function canNotLose(boardState, player) { // num_moves


    let gameStatus = getGameStatus(boardState);
    if (gameStatus !== GameStatus.in_progress) { // game is over, process exit
        return (player === Player.player_1 && gameStatus === GameStatus.player_1_win) || (player === Player.player_2 && gameStatus === GameStatus.player_2_win);
    }
    throw Error("Not Implemented")
}

function determineNextMove(boardState, player) {
    // look for win move
    // look for non_lose move
    throw Error("Not Implemented")
}


function ai() {
    // done: get state of the board.
    // - already have in variable t
    // todo 2: create smart ai algorithm that always wins.

    // Let's do the following: consider all possible moves and see which ones lead to win.

    var id = Math.floor(Math.random() * 9);
    t[id] ? ai() : move(id, 'ai');
}

function checkEnd() {
    if (t[0] === 'ai' && t[1] === 'ai' && t[2] === 'ai' || t[0] === 'player' && t[1] === 'player' && t[2] === 'player') return true;
    if (t[3] === 'ai' && t[4] === 'ai' && t[5] === 'ai' || t[3] === 'player' && t[4] === 'player' && t[5] === 'player') return true;
    if (t[6] === 'ai' && t[7] === 'ai' && t[8] === 'ai' || t[6] === 'player' && t[7] === 'player' && t[8] === 'player') return true;
    if (t[0] === 'ai' && t[3] === 'ai' && t[6] === 'ai' || t[0] === 'player' && t[3] === 'player' && t[6] === 'player') return true;
    if (t[1] === 'ai' && t[4] === 'ai' && t[7] === 'ai' || t[1] === 'player' && t[4] === 'player' && t[7] === 'player') return true;
    if (t[2] === 'ai' && t[5] === 'ai' && t[8] === 'ai' || t[2] === 'player' && t[5] === 'player' && t[8] === 'player') return true;
    if (t[0] === 'ai' && t[4] === 'ai' && t[8] === 'ai' || t[0] === 'player' && t[4] === 'player' && t[8] === 'player') return true;
    if (t[2] === 'ai' && t[4] === 'ai' && t[6] === 'ai' || t[2] === 'player' && t[4] === 'player' && t[6] === 'player') return true;
    if (t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) return true;
}

function move(id, role) {
    if (t[id]) return false;
    t[id] = role;
    document.getElementById(id).className = 'cell ' + role;
    !checkEnd() ? (role === 'player') ? ai() : null : reset()
}

function reset() {
    alert("Игра окончена!");
    location.reload();
}