import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar/Navbar";
import Search from "./Containers/Search/Search";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <NavBar />
          <Search />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
