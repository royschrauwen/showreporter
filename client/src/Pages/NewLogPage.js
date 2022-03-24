import React from "react";
import TextField from "@mui/material/TextField";

const NewLogPage = () => {
  return (
    <div className="new-log-form">
      <div className="new-log-input">
        <TextField
          required
          id="standard-required"
          label="Datum"
          variant="outlined"
          margin="normal"
          defaultValue="24-03-2022"
        />
      </div>
      <div className="new-log-input">
        <TextField
          required
          id="standard-required"
          label="Toneelmeester"
          variant="outlined"
          margin="normal"
          defaultValue="Roy Schrauwen"
        />
      </div>
      <div className="new-log-input">
        <TextField
          required
          id="standard-required"
          label="Bericht"
          variant="outlined"
          margin="normal"
          defaultValue="Caro ging goed!"
        />
      </div>
    </div>
  );
};

export default NewLogPage;
