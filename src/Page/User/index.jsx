import {
  TableHead,
  Table,
  Paper,
  TableCell,
  TableRow, TableBody
} from "@material-ui/core";
import Axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function User() {
  const [user, setUser] = useState([]);
// console.log(user)
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setUser(res.data);
    });
  });
  return (
    <div className="root">
      <Paper className="paper">
        <h3 className="title">DATA USER</h3>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell  className="head">ID</TableCell>
              
              <TableCell  className="head">Name</TableCell>
              <TableCell  className="head">Username</TableCell>
              <TableCell  className="head">Email</TableCell>
              <TableCell  className="head">Address</TableCell>
              <TableCell  className="head">Phone</TableCell>
              {/* <TableCell  className="head">Website</TableCell> */}
              {/* <TableCell  className="head">Company</TableCell> */}
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
