import {
  makeStyles,
  TableHead,
  Table,
  Paper,
  TableCell,
  TableRow, TableBody
} from "@material-ui/core";
import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "100px 0 0 0 ",
    // backgroundColor: "red",
    textAlign:"center",
    margin:"0 auto"
  },
  paper:{
    textAlign:"center",
    margin:"0 auto",
    width:"800px",
  },
  title: {
    fontSize:"20px",
    padding:"20px 0"
  },
  head:{
    fontSize:"16px",
  }
});

export default function User() {
  const classes = useStyles();
  const [user, setUser] = useState([]);
// console.log(user)
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setUser(res.data);
    });
  });
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h3 className={classes.title}>DATA USER</h3>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell  className={classes.head}>ID</TableCell>
              
              <TableCell  className={classes.head}>Name</TableCell>
              <TableCell  className={classes.head}>Username</TableCell>
              <TableCell  className={classes.head}>Email</TableCell>
              <TableCell  className={classes.head}>Address</TableCell>
              <TableCell  className={classes.head}>Phone</TableCell>
              {/* <TableCell  className={classes.head}>Website</TableCell> */}
              {/* <TableCell  className={classes.head}>Company</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
          {user.map(item => (
            <TableRow>
              <TableCell>{item.id}</TableCell>
              
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.username}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.address.street}{" "+item.address.suite+" "}{item.address.city}</TableCell>
              <TableCell>{item.phone}</TableCell>
              {/* <TableCell>{item.website}</TableCell> */}
              {/* <TableCell>{item.company.name}{" "+item.company.catchPhrase+" "}{item.company.bs}</TableCell> */}
            </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
