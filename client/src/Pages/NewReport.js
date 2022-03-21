import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const NewReport = () => {
  return (
    <>
      <h3>New Report</h3>
      <div className="new-report-container">
        <TextField
          className="new-report-text"
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          className="new-report-text"
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          className="new-report-text"
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          className="new-report-text"
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          className="new-report-text"
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          className="new-report-text"
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          className="new-report-text"
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
        <Button variant="contained">Save</Button>
      </div>
    </>
  );
};

export default NewReport;
