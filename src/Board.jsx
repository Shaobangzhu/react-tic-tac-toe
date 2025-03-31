import Square from "./Square";

// Helper function to determine which player's turn is next
function getNextPlayer(squares) {
  // Count how many squares have been filled with "X" or "O"
  const filledSquares = squares.filter((item) => item === "X" || item === "O");
  const filledNumber = filledSquares.length;

  // If even, it's "X"'s turn; if odd, it's "O"'s
  const nextPlayer = filledNumber % 2 === 0 ? "X" : "O";
  return nextPlayer;
}

// Board component: renders the tic-tac-toe grid and handles clicks
function Board({squares, winner, onChange}) {
  // Determine who the next player is
  const nextPlayer = getNextPlayer(squares);

  // Display winner or show next player
  const status = winner ? `${winner} is winner` : `Next player: ${nextPlayer}`;

  // Handle clicking on a square
  const clickHandler = (index) => {
    const currentSquare = squares[index];

    // Only allow a move if the square is empty and there's no winner yet
    if (currentSquare === null && !winner) {
      // Create a new array so we don't mutate state directly
      const newSquares = squares.slice();
      // Mark the square with the current player's symbol
      newSquares[index] = nextPlayer;
      // Trigger the onChange handler to update the board state
      onChange(newSquares);
    }
  };

  // Render the game board: 3 rows with 3 squares each
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} index={0} onClick={clickHandler} />
        <Square value={squares[1]} index={1} onClick={clickHandler} />
        <Square value={squares[2]} index={2} onClick={clickHandler} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} index={3} onClick={clickHandler} />
        <Square value={squares[4]} index={4} onClick={clickHandler} />
        <Square value={squares[5]} index={5} onClick={clickHandler} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} index={6} onClick={clickHandler} />
        <Square value={squares[7]} index={7} onClick={clickHandler} />
        <Square value={squares[8]} index={8} onClick={clickHandler} />
      </div>
    </>
  );
}

export default Board;
