import Square from "./Square";

const Board = ({ xIsNext, square, onPlay }) => {
  const handleClick = (i) => {
    if (square[i] || calculateWinner(square)) return;
    const nextSqaures = square.slice();
    if (xIsNext) {
      nextSqaures[i] = "X";
    } else {
      nextSqaures[i] = "O";
    }
    onPlay(nextSqaures);
    // setxIsNext(!xIsNext);
  };

  const winner = calculateWinner(square);
  let status;
  winner
    ? (status = `Winner : ${winner}`)
    : (status = `Next player : ${xIsNext ? "X" : "0"}`);
  return (
    <>
      <div className="status">{status}</div>
      <div className="row">
        <Square value={square[0]} onSquareClick={() => handleClick(0)} />
        <Square value={square[1]} onSquareClick={() => handleClick(1)} />
        <Square value={square[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={square[3]} onSquareClick={() => handleClick(3)} />
        <Square value={square[4]} onSquareClick={() => handleClick(4)} />
        <Square value={square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={square[6]} onSquareClick={() => handleClick(6)} />
        <Square value={square[7]} onSquareClick={() => handleClick(7)} />
        <Square value={square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;

const calculateWinner = (square) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
};
