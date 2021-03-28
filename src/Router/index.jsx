import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainApp from "../Main";
// import Artikel from "../Page/Artikel";
// import User from "../Page/User";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/artikel">
          <Artikel />
        </Route>
        <Route path="/to-do-list">
          <TodoList />
        </Route>*/}
        {/* <Route path="/user">
          <User />
        </Route>  */}
        <Route path="/">
          <MainApp />{" "}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
