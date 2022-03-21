import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const NewReport = () => {
  return (
    <>
      <h3 className="new-report-header">New Report</h3>
      <div className="new-report-container">
        <TextField
          className="new-report-text"
          required
          id="standard-required"
          label="Input"
          variant="standard"
          margin="dense"
        />
        <TextField
          className="new-report-text"
          type="search"
          id="standard-disabled"
          label="Input"
          variant="standard"
          margin="dense"
        />
        <TextField
          className="new-report-text"
          id="standard-password-input"
          label="Input"
          type="search"
          variant="filled"
          margin="dense"
        />

        <TextField
          className="new-report-text"
          id="standard-search"
          label="Input"
          type="search"
          variant="filled"
          margin="dense"
        />
        <TextField
          className="new-report-text"
          label="Input"
          id="margin-normal"
          margin="dense"
        />
        <TextField
          className="new-report-text"
          label="Input"
          id="margin-normal"
          margin="dense"
        />
        <Button variant="contained">Save</Button>
      </div>
    </>
  );
};

export default NewReport;
