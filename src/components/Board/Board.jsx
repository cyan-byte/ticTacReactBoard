import Square from "../Square/Square";
import "./board.css";

function Board() {
  const arr = [
    "square 1",
    "square 2",
    "square 3",
    "square 4",
    "square 5",
    "square 6",
    "square 7",
    "square 8",
    "square 9",
  ];

  return (
    <div className='Board'>
      {arr.map((el) => {
        return <Square title={el} />;
      })}
    </div>
  );
}

export default Board;
