import React from "react";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "../../Component";
import Home from "../Home";

const MainApp = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};
export default MainApp;
