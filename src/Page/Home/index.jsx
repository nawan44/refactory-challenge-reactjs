import {  makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root:{
    width:"100%",    
    padding: "150px 0 0 50px ",
  },

})

export default function Home() {
  const classes = useStyles()
  return <div className={classes.root}><h1>HOME</h1></div>;
}