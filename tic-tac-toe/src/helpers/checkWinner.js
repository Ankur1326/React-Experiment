function isWinner(board, symbol) {
    // raw 
    if (board[0] == board[1] && board[1] == board[2] && board[2] == symbol) return symbol;
    if (board[3] == board[4] && board[4] == board[5] && board[5] == symbol) return symbol;
    if (board[6] == board[7] && board[7] == board[8] && board[8] == symbol) return symbol;
    
    // column
    if (board[0] == board[3] && board[3] == board[6] && board[6] == symbol) return symbol;
    if (board[1] == board[4] && board[4] == board[7] && board[7] == symbol) return symbol;
    if (board[2] == board[5] && board[5] == board[8] && board[8] == symbol) return symbol;
    
    
    if (board[0] == board[4] && board[4] == board[8] && board[4] == symbol) return symbol;
    if (board[2] == board[4] && board[4] == board[6] && board[4] == symbol) return symbol;
}

export default isWinner;