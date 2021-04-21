import {
  TableHead,
  Table,
  Paper,
  TableCell,
  TableRow,
  TableBody,
  FormControlLabel,
  Switch,
  Button,
} from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState([]);
  const [state, setState] = React.useState({
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  // console.log(user)
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodo(res.data);
    });
  });
  return (
    <div className="root">
      <Paper className="paper">
        <h3 className="title">TODO LIST</h3>
        <Button color="primary" className="button" href="input-todo-list">
          add TODO LIST
        </Button>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="head">User Id</TableCell>
              <TableCell className="head">Id</TableCell>
              <TableCell className="head">Title</TableCell>
              <TableCell className="headCompleted">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todo.map((item) => (
              <TableRow>
                <TableCell className="list">{item.userId}</TableCell>
                <TableCell className="list">{item.id}</TableCell>
                <TableCell className="list">{item.title}</TableCell>
                <TableCell  className="headCompleted">
                  <FormControlLabel
                    control={
                      <Switch
                      className="switch"
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                      />
                    }
                    label="A"
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
