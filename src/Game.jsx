import { useState } from "react";

import Board from "./Board";
import History from "./History";

// Function to calculate if there is a winner or a draw
function calculateWinner(squares) {
  // All possible win conditions (rows, columns, diagonals)
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Check if any win condition is met
  for (let i = 0; i < winConditions.length; i++) {
    const winCondition = winConditions[i];
    const [a, b, c] = winCondition;
    
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return the winning symbol ("X" or "O")
    }
  }

  // If all squares are filled and no winner, it's a draw
  const filledSquares = squares.filter((item) => item === "X" || item === "O");
  if (filledSquares.length === 9) {
    return "Nobody";
  }

  // No winner or draw yet
  return null;
}

function Game() {
  // Holds current board state (9 squares)
  const [squares, setSquares] = useState(Array(9).fill(null));

  // History of all past board states (for backtracking)
  const [history, recordHistory] = useState([Array(9).fill(null)]);

  // Stores the winner once determined
  const [winner, setWinner] = useState(undefined);

  // If no winner yet, check for winner or draw based on current squares
  if(!winner) {
    const result = calculateWinner(squares);
    result && setWinner(result);
  }

  // Called when a square is clicked
  const handleSquareChange = (newSquares) => {
    setSquares(newSquares);
    recordHistory([...history, newSquares]);
  }

  // Called when a history step is clicked
  const handleHistoryChange = (index) => {
    const newSquares = history[index];
    setSquares(newSquares);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} winner={winner} onChange={handleSquareChange} />
      </div>
      <div className="game-history">
        { winner ? <History history={history} onChange={handleHistoryChange} /> : null }
      </div>
    </div>
  );
}

export default Game;
