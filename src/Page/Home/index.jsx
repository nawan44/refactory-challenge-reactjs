import {
  makeStyles,
  TableHead,
  Table,
  Paper,
  TableCell,
  TableRow, TableBody, FormControlLabel, Switch, Button
} from "@material-ui/core";
import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "100px 0 0 0 ",
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

export default function Home() {
  const classes = useStyles();
  const [user, setUser] = useState([]);
  const [state, setState] = React.useState({
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
// console.log(user)
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
      setUser(res.data);
    });
  });
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h3 className={classes.title}>TODO LIST</h3>
        <Button  color="primary"className={classes.title} href="input-todo-list">add TODO LIST</Button>

        <Table>
          <TableHead>
            <TableRow>
            <TableCell  className={classes.head}>User Id</TableCell>           
              <TableCell  className={classes.head}>Id</TableCell>
              <TableCell  className={classes.head}>Title</TableCell>
              <TableCell  className={classes.head}>Completed</TableCell>   
            </TableRow>
          </TableHead>
          <TableBody>
          {user.map(item => (
            <TableRow>
              <TableCell>{item.userId}</TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>
              <FormControlLabel
        control={
          <Switch
            checked={item.completed}
            onChange={handleChange}
            name="checkedB"
            value={state.checkedB}
            color="primary"
          />
        }
        label="Completed"
      />
              </TableCell>
            </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
