import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./features/userLogin/containers/LoginPage";
import DataTestPage from "./features/dataTest/containers/DataTestPage";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/data-test">
            <DataTestPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
