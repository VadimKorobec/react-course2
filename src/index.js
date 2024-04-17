import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";

import "bootstrap/dist/css/bootstrap.min.css";

const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "INC":
      return { value: state.value + 1 };
    case "DEC":
      return { value: state.value - 1 };
    case "RND":
      return { value: state.value * action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

const update = () => {
  document.getElementById("counter").textContent = store.getState().value;
};

store.subscribe(update);

const inc = () => {
  return {
    type: "INC",
  };
};

const dec = () => {
  return {
    type: "DEC",
  };
};

const rnd = () => {
  const value = Math.floor(Math.random() * 10);
  return {
    type: "RND",
    payload: value,
  };
};

document.getElementById("inc").addEventListener("click", () => {
  store.dispatch(inc());
});

document.getElementById("dec").addEventListener("click", () => {
  store.dispatch(dec());
});

document.getElementById("rnd").addEventListener("click", () => {
  store.dispatch(rnd());
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
