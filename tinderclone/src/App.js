import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCard from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am chat page</h1>
          </Route>
          <Route path="/">
            <TinderCard />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>

      {/* Chat Screen  */}
      {/* Indivisual Chat Screen  */}
    </div>
  );
}

export default App;
