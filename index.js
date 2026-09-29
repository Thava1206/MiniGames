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
function winning_condition() {
    if ((BOARD[0][0] == 'X' && BOARD[0][1] =='X' && BOARD[0][2] == 'X')) {
        console.log("YOHOHO");
    }
    if ((BOARD[1][0] == 'X' && BOARD[1][1] =='X' && BOARD[1][2] == 'X')) {
        console.log("YOHOHO");
    }
    if ((BOARD[2][0] == 'X' && BOARD[2][1] =='X' && BOARD[2][2] == 'X')) {
        console.log("YOHOHO");
    }

    if ((BOARD[0][0] == 'X' && BOARD[1][0] =='X' && BOARD[2][0] == 'X')) {
        console.log("YOHOHO");
    }
    if ((BOARD[0][1] == 'X' && BOARD[1][1] =='X' && BOARD[2][1] == 'X')) {
        console.log("YOHOHO");
    }
    if ((BOARD[0][2] == 'X' && BOARD[1][2] =='X' && BOARD[2][2] == 'X')) {
        console.log("YOHOHO");
    }

    if ((BOARD[0][0] == 'X' && BOARD[1][1] =='X' && BOARD[2][2] == 'X')) {
        console.log("YOHOHO");
    }
    if ((BOARD[0][2] == 'X' && BOARD[1][1] =='X' && BOARD[2][0] == 'X')) {
        console.log("YOHOHO");
    }
}
game_board();
input_x(0,0);
input_x(0,1);
input_x(0,2);
winning_condition();