import  { useState } from 'react';
import Board from './Board';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isAgainstAI, setIsAgainstAI] = useState(false);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    if (isAgainstAI && !isXNext && !calculateWinner(newBoard)) {
      const bestMove = calculateBestMove(newBoard);
      if (bestMove !== null) {
        newBoard[bestMove] = '0';
        // newBoard[bestMove] = '0';
        setBoard(newBoard);
        setIsXNext(true);
      }
    }
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const calculateBestMove = (board) => {
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        return i;
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-4xl font-bold mb-8">Tic-Tac-Toe</h1>
      <div className="mb-4">
        <label className="mr-2">
          <input
            type="radio"
            name="mode"
            checked={!isAgainstAI}
            onChange={() => setIsAgainstAI(false)}
          /> Player vs Player
        </label>
        <label>
          <input
            type="radio"
            name="mode"
            checked={isAgainstAI}
            onChange={() => setIsAgainstAI(true)}
          /> Player vs AI
        </label>
      </div>
      <div className="text-2xl mb-4">{status}</div>
      <Board squares={board} onClick={handleClick} />
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
};

export default Game;
