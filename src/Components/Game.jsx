import { useState } from "react";
import Board from "./Board";

const Game = () => {
  //const [xIsNext, setxIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquare = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setxIsNext(!xIsNext);
    // setHistory([...history, nextSquares]);
    // setxIsNext(!xIsNext);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setxIsNext(nextMove % 2 === 0);
  };
  const moves = history.map((square, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = `Go to game start`;
    }
    return (
      <>
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      </>
    );
  });
  return (
    <>
      <div className="game">
        <div className="board">
          <Board xIsNext={xIsNext} square={currentSquare} onPlay={handlePlay} />
        </div>
        <div className="info">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
};

export default Game;
