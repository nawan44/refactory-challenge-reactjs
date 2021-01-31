import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../Page/Main";
import Artikel from "../Page/Artikel";
import TodoList from "../Page/Todolist";
import User from "../Page/User";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/artikel">
          <Artikel />
        </Route>
        <Route path="/to-do-list">
          <TodoList />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
