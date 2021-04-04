import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Paper,
  TextField,
  Switch,
  FormControlLabel, Button
} from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "100px 0 0 0 ",
    textAlign: "center",
    margin: "0 auto",
  },
  paper: {
    textAlign: "center",
    margin: "0 auto",
    width: "800px",
    padding:"20px",
    marginTop:"70px",
    marginBottom:"50px"
  },
  title: {
    fontSize: "20px",
    padding: "20px 0",
  },
  head: {
    fontSize: "16px",
  },
  textField :{
    width : "90%",
    margin: "10px"
  },
  button:{
    width:"90%",
    backgroundColor:"#3F51B5",
    margin: "70px 0 30px 0",
    color:"#fff",
    padding:"10px 0"
  },
  status:{
    textAlign:"left",
    margin : "20px 0 0 40px"
  },
  switch:{
    float:"left",
    margin : "10px 0 0 40px"

  }
});
export default function InputTodoList() {
  const classes = useStyles();
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
        process.env.REACT_APP_URL + "/api/supp/data",
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
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h3 className={classes.title}>INPUT TODO LIST</h3>
        <form onSubmit={handleSubmit}>

        <TextField
          id="user-id"
          className={classes.textField}
          label="User ID"
          variant="outlined"
          name ="userId"
          value={state.userId}
        />
        <TextField
          id="todolist-id"
          className={classes.textField}
          label="Todolist ID"
          variant="outlined"
          name ="toDoListId"
          value={state.toDoListId}
        />
        <TextField
          id="title-todolist"
          className={classes.textField}
          label="Title Todolist"
          variant="outlined"
          name ="titleToDoList"
          value={state.titleToDoList}

        />
        <h3 className={classes.status}>Status :</h3>
        <FormControlLabel
            className={classes.switch}
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
        <Button type="submit" className={classes.button} >Input Data</Button>
     </form>
      </Paper>
    </div>
  );
}
