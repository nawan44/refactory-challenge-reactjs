import {  makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root:{
    width:"100%",
    height:"400px",
    
    padding: "150px 0 0 50px ",
    backgroundColor:"red"
  },
  rooty:{
    width:"100%",
    height:"400px",
    color:"yellow",
    padding: "250px 0 0 50px ",
    backgroundColor:"red"
  },
})

export default function Artikel() {
  const classes = useStyles()
  return <div className={classes.root}><h1 className={classes.rooty}>ARTIKEL</h1></div>;
}