import React from "react";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "../../Component/Layout";
import Home from "../Home";

const MainApp = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};
export default MainApp;
