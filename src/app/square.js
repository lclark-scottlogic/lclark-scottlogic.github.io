import React from "react";
import squareCSS from './square.module.css'
function Square(props) {
    //create a button that we can click on and will be indexed and displayed in the square
    return (
      //onClick is a function which will set the state to a X when <button> clicked (setState inherent to react)
      //onClick and <button> tells react to listen when clicked. onClick is then specified in Board so
      //handleClick(i) is called. button +onClick is builin whilst Board's onClick is a variable
      <button className={squareCSS.square} onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  export default Square