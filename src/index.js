import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import { configuredStore } from "./store";

import App from "./App";

// ReactDom.render(<App />, document.querySelector("#root"));
const store = configuredStore();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
