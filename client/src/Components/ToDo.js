import React from "react";
import Paper from "@mui/material/Paper";

const ToDo = ({ titel, info }) => {
  return (
    <Paper variant="outlined" elevation={2}>
      <h4>{titel}</h4>
      <p>{info}</p>
    </Paper>
  );
};

export default ToDo;
