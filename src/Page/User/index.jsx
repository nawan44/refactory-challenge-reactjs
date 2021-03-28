import {
  makeStyles,
  TableHead,
  Table,
  Paper,
  TableCell,
  TableRow, TableBody
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "100px 0 0 0 ",
    backgroundColor: "red",
  },
});

export default function User() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>{" "}
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>{" "}
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>
          </TableBody>
 
        </Table>
      </Paper>
    </div>
  );
}
