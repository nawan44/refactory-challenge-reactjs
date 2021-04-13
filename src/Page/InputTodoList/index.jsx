import React, {  useState } from "react";
import {
  
  Paper,
  TextField,
  Switch,
  FormControlLabel, Button
} from "@material-ui/core";

export default function InputTodoList() {
  const [completed, setCompleted] = React.useState({
    checkedB: false,
  });
  const [state, setState] = useState({
    userId: null,
    toDoListId: null,
    titleToDoList: null,
    completed : []
   
  });
  const handleChangeCompleted = (event) => {
    setCompleted({ ...completed, [event.target.name]: event.target.checked });
  };
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (data) => {
    data.preventDefault();
    // history.push("/list-support");

    try {
      let form = { ...state };
      // console.log("form", form);
      const response = await fetch(
        process.env.REACT_APP_URL,
        {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          //   Authorization: localStorage.getItem("token"),
          // },
          body: JSON.stringify(form),
        }
      );
      const res = await response.json();
      // console.log("res>>", res);
      setState({
        userId: "",
        toDoListId: "",
        titleToDoList: "",
        completed : []

      });
      alert("success", res.status);
    } catch (err) {
      alert("error", err.message);
    }
  };
  return (
    <div className="root">
      <Paper className="paper">
        <h3 className="title">INPUT TODO LIST</h3>
        <form onSubmit={handleSubmit}>

        <TextField
          id="user-id"
          className="textField"
          label="User ID"
          variant="outlined"
          name ="userId"
          value={state.userId}
        />
        <TextField
          id="todolist-id"
          className="textField"
          label="Todolist ID"
          variant="outlined"
          name ="toDoListId"
          value={state.toDoListId}
        />
        <TextField
          id="title-todolist"
          className="textField"
          label="Title Todolist"
          variant="outlined"
          name ="titleToDoList"
          value={state.titleToDoList}

        />
        <h3 className="status">Status :</h3>
        <FormControlLabel
             className="switch"
          control={
            <Switch

              checked={state.checkedB}
              onChange={handleChangeCompleted}
              name="checkedB"
              value={completed.checkedB}
              color="primary"
            />
          }
          label="Completed"
        />
        <Button type="submit" className="button" >Input Data</Button>
     </form>
      </Paper>
    </div>
  );
}
