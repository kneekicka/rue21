import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar/Navbar";
import Search from "./Containers/Search/Search";
import People from "./Containers/People/People";
import Job from "./Containers/Job/Job";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <NavBar />
          <Search />
        </Route>
        <Route path="/people">
          <NavBar />
          <People />
        </Route>
        <Route path="/job">
          <NavBar />
          <Job />
        </Route>
        <Route path="/">
          <NavBar />
          <Search />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
