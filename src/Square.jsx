// Square component: represents a single cell on the Tic-Tac-Toe board
function Square({ value, index, onClick }) {
    // Render a div styled as a square
    // When clicked, call the onClick handler passed from parent with this square's index
    return (
        <div className="square" onClick={() => onClick(index)}>{value}</div>
    )
}

export default Square;