import Board from "./board";
import React from "react";
import boardCSS from './board.module.css'
import gameCSS from './game.module.css'
import './list.module.css'
import { setHistory, setXIsNext, setStepNumber } from "./Slice";
import { useDispatch, useSelector } from "react-redux";
function Game(props) {
    //lifting state up from board to game to store history
    const dispatch = useDispatch();
    const history = useSelector((state) => state.game.history);
    const stepNumber = useSelector((state) => state.game.stepNumber);
    const xIsNext = useSelector((state) => state.game.xIsNext);
  
    const jumpTo = (step) => {
      dispatch(setStepNumber(step));
      dispatch(setXIsNext(step % 2 === 0));
      dispatch(setHistory(history.slice(0,step+1)))
    };
  
    const handleClick = (i) => {
      const hist = history.slice(0, stepNumber + 1);
      const current = hist[hist.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      //ternary allows change from X and O
      squares[i] = xIsNext ? "👵🏻" : "🧓🏻";
      dispatch(setHistory(hist.concat([{ squares: squares }])));
      dispatch(setStepNumber(hist.length));
      dispatch(setXIsNext(!xIsNext));
    };
    const hist = history;
    const current = hist[stepNumber];
    const winner = calculateWinner(current.squares);
  
    const moves = hist.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "👵🏻" : "🧓🏻");
    }
  
    return (
      <div className={gameCSS.game}>
  <h1> NOUGHTS AND CROSSES</h1>
        <div className={boardCSS.boardFull}>
          <Board squares={current.squares} onClick={(i) => handleClick(i)} />
        </div>
        <div className={gameCSS.gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
  
  //lines holds all possible ways to win as combinations of indices.
  //For loop checks for winning combs
  // ReactDOM.render(<Game />, document.getElementById("root"));
  // root.render(<Game />);
  
  function calculateWinner(squares) {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  export default Game