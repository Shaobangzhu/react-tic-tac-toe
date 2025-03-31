// History component: displays a clickable list of past game states
function History({history, onChange}) {

    // Map through each board state in the history array
    const historyItems = history.map((item, index)=>{
        return (
            <li key={index} className="history-item" onClick={() => onChange(index)}>
                This is step {index + 1}
            </li>
        )
    });

    // Render the history list and title
    return (
        <div>
            <h2 className="history-title">History</h2>
            <ul className="history-list">{historyItems}</ul>
        </div>
    )
}

export default History;