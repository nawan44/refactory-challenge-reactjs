import {  makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root:{
    width:"100%",    
    padding: "150px 0 0 50px ",
    backgroundColor:"red"
  },

})

export default function Artikel() {
  const classes = useStyles()
  return <div className={classes.root}><h1>ARTIKEL</h1></div>;
}