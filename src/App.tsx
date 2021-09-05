import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PersonPage from "./pages/PersonPage";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <section className="app-body">
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/person">
              <PersonPage />
            </Route>
          </Switch>
        </Router>
      </section>
    </div>
  );
}

export default App;
