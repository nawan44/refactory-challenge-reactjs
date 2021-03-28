import React from "react";
import  Layout  from "../Component";
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Route,
} from "react-router-dom";
import { ExitToApp } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import Home from "../Page/Home";
import Artikel from "../Page/Artikel";
import User from "../Page/User";

const MainApp = () => {
  let history = useHistory();

  return (
    <>
      <IconButton
        style={{
          color: "#FFFF",
          zIndex: 2000,
          position: "absolute",
          top: "8px",
          right: "10px",
        }}
        onClick={() => {
          localStorage.removeItem("token");
          history.push("login");
        }}
      >
        <ExitToApp
          style={{
            position: "fixed",
            margin: "10px 20px 10px 10px",
            float: "left",
          }}
        />
      </IconButton>

      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/dashboard" exact>
              <Home />
            </Route>
            <Route path="/user" exact>
              <User />
            </Route>
            <Route path="/article" exact>
              <Artikel />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default MainApp;
