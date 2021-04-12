import React from "react";
import { makeStyles } from "@material-ui/styles";


import { Layout } from "../Component";
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
import InputTodoList from "../Page/InputTodoList";
import { StylesProvider } from "@material-ui/core/styles";

import "../Assets/styles/pages.css";

const useStyles = makeStyles((theme) => ({
  logout: {
    width: 30,
    height: 30,
    position: "fixed",
    margin: "10px 50px 10px 0",

    "&:hover": {
      background: "#fff",
      color: "#3F51B4",
      "& .MuiSvgIcon-root": {
        color: "#3F51B4",
      },
    },
    "&:active": {
      background: "#fff",
      color: "#3F51B4",
      "& .MuiSvgIcon-root": {
        color: "#3F51B4",
      },
    },
  },
}));
const MainApp = () => {
  let history = useHistory();
  const classes = useStyles();

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
              <ExitToApp className={classes.logout} />


      </IconButton>

      <Router>
      <StylesProvider injectFirst>

        <Layout>
          <Switch>
          <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/input-todo-list" exact>
              <InputTodoList />
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
        </StylesProvider>

      </Router>
    </>
  );
};

export default MainApp;
