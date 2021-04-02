import React from "react";
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
    width:"90%"
  }
});
export default function InputTodoList() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h3 className={classes.title}>TODO LIST</h3>
        <TextField
          id="user-id"
          className={classes.textField}
          label="User ID"
          variant="outlined"
        />
        <TextField
          id="todolist-id"
          className={classes.textField}
          label="Todolist ID"
          variant="outlined"
        />
        <TextField
          id="title-todolist"
          className={classes.textField}
          label="Title Todolist"
          variant="outlined"
        />
        <h3>Status :</h3>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              value={state.checkedB}
              color="primary"
            />
          }
          label="Completed"
        />
        <Button className={classes.button} color="primary">Input Data</Button>
      </Paper>
    </div>
  );
}
