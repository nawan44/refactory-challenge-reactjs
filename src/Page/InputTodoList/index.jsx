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
  const [state, setState] = React.useState({
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h3 className={classes.title}>INPUT TODO LIST</h3>
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
        <h3 className={classes.status}>Status :</h3>
        <FormControlLabel
            className={classes.switch}
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
        <Button className={classes.button} >Input Data</Button>
      </Paper>
    </div>
  );
}
