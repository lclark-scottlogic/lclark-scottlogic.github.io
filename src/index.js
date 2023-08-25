import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./app/store";
// import App from './app/App'
import { Provider } from "react-redux";
// import { setHistory, setXIsNext, setStepNumber } from "./app/Slice";
// import { useDispatch, useSelector } from "react-redux";
import Game from './app/game'
// const root = ReactDOM.createRoot(document.getElementById('root'))
ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById("root")
);
