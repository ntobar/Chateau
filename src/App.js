import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
import Rooms from "./components/Rooms/Rooms";

const App = () => (
  <Router>
    <Route path="/" exact component={Join} />
    <Route path="/chat" exact component={Chat} />
    <Route path="/rooms" exact component={Rooms} />
  </Router>
);

export default App;
