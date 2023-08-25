import Square from './square';
import React from "react";
import boardCSS from './board.module.css'
function Board(props) {
const renderSquare = (i) => {
    //alter renderSquare so it reads the state of the i-th square
    return (
      //pass down value and onClick from board to square
      <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
    );
  };
  return (
    <div className={boardCSS.boardFull}>
      <div className={boardCSS.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={boardCSS.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={boardCSS.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}  
export default Board