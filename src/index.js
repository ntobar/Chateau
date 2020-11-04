import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import App from "./App";

import { configuredStore } from "./store";

// ReactDom.render(<App />, document.querySelector("#root"));
const store = configuredStore();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
