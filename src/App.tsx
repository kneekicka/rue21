import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar/Navbar";
import Search from "./Containers/Search/Search";
import People from "./Containers/People/People";
import Job from "./Containers/Job/Job";
import Login from "./Containers/Login/Login";
import Password from "./Containers/Password/Password";
import ManageUsers from "./Containers/ManageUsers/ManageUsers";
import JobSingle from "./Containers/JobSingle/JobSingle";
import PersonSingle from "./Containers/PersonSingle/PersonSingle";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <NavBar />
          <Login />
        </Route>
        <Route path="/password">
          <NavBar />
          <Password />
        </Route>
        <Route path="/manage-users">
          <NavBar />
          <ManageUsers />
        </Route>
        <Route path="/home">
          <NavBar />
          <Search />
        </Route>
        <Route path="/people">
          <NavBar />
          <People />
        </Route>
        <Route path="/jobs">
          <NavBar />
          <Job />
        </Route>
        <Route path="/job-profile/*">
          <NavBar />
          <JobSingle />
        </Route>
        <Route path="/person-profile/*">
          <NavBar />
          <PersonSingle />
        </Route>
        <Route path="/">
          <NavBar />
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
