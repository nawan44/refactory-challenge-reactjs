import React from "react";
import {  makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  containerFooter: {
    color: "#fff",
    backgroundColor: "#3F51B5",
    height: "auto",
    width: "100%",
    float: "left",
    textAlign: "center",
    margin: "0 auto",
    marginTop: "10px",
    padding : "10px 0"
  },
});

export default function Footer() {
  const classes = useStyles();

  return <div className={classes.containerFooter}>@nawan44</div>;
}
