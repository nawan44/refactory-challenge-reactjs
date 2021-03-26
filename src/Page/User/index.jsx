import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root:{
    width:"100%",
    margin: "50px 0 0 0 ",
    backgroundColor:"red"
  },
})

export default function User() {
  const classes = useStyles()
  return <div className={classes.root}>USEERR</div>;
}
