const ROW = 3;
const COLUMN = 3;
const BOARD = [];
function game_board() {

    for (let i = 0; i < ROW; i++) {
        BOARD.push([]);
        for (let j = 0; j < COLUMN; j++) {
            BOARD[i].push(0);
        }
    }
    print_board();
    
}
function print_board(){
    for (let i = 0; i < BOARD.length; i++) {
        console.log(JSON.stringify(BOARD[i]));
    }
}
function input_x(r,c) {
    if(check_spot(r,c)) {
        BOARD[r][c] = 'X';
        console.log("\n");
        print_board();  
    }
}
function input_o(r,c) {
    if(check_spot(r,c)) {
        BOARD[r][c] = 'O';
        console.log("\n");
        print_board();  
    }
}
function check_spot(r,c) {
    if (BOARD[r][c] == 'X' || BOARD[r][c] == 'O') {
        console.log("ERROR: SPOT TAKEN");
        return false;
    }
    return true;
}
game_board();
input_x(1,1);
input_x(1,2);
input_x(1,2);