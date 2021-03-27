import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root:{
    width:"100%",
    margin: "50px 0 0 0 ",
  },
})

export default function Artikel() {
  const classes = useStyles()
  return <div className={classes.root}>ARTIKEL</div>;
}