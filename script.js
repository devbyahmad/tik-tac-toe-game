let currentPlayer = "X";
let boardState = Array(9).fill(null);
let isGameOver = false;

function handleClick(el) {
    const index = el.id;

    if (boardState[index] || isGameOver) return;

    boardState[index] = currentPlayer;
    el.innerText = currentPlayer;

    if (checkWinner()) {
        document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
        isGameOver = true;
        return;
    }

    if (boardState.every(cell => cell)) {
        document.getElementById('status').innerText = `It's a Draw!`;
        isGameOver = true;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
    const winCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    return winCombos.some(combo => {
        const [a, b, c] = combo;
        return boardState[a] &&
               boardState[a] === boardState[b] &&
               boardState[a] === boardState[c];
    });
}

function resetGame() {
    boardState = Array(9).fill(null);
    isGameOver = false;
    currentPlayer = "X";
    document.getElementById('status').innerText = "Player X's turn";
    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerText = '';
    });
}
