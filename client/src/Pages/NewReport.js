import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const NewReport = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <h3 className="new-report-header">New Report</h3>
      <div className="new-report-container">
        <TextField
          className="new-report-text"
          required
          id="standard-required"
          label="Show"
          variant="outlined"
          margin="normal"
          defaultValue="Caro"
        />

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Sparklers
            </FormLabel>
          </Grid>
          <Grid item xs={6}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="OK" />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Probleem"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={6}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Cyr-wheel
            </FormLabel>
          </Grid>
          <Grid item xs={6}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="OK" />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Probleem"
              />
            </RadioGroup>
          </Grid>
        </Grid>

        {/* <FormControl> */}

        <FormLabel id="demo-row-radio-buttons-group-label">Straps</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="OK" />
          <FormControlLabel value="male" control={<Radio />} label="Probleem" />
        </RadioGroup>
        <FormLabel id="demo-row-radio-buttons-group-label">Vlammen</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="OK" />
          <FormControlLabel value="male" control={<Radio />} label="Probleem" />
        </RadioGroup>
        {/* </FormControl> */}

        <TextField
          className="new-report-text"
          type="time"
          id="standard-disabled"
          label="Aanvang"
          defaultValue="18:30"
          variant="outlined"
          margin="normal"
        />
        <InputLabel id="demo-simple-select-label">Toneelmeester</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Toneelmeester"
          onChange={handleChange}
        >
          <MenuItem value={10}>Roy Schrauwen</MenuItem>
          <MenuItem value={20}>Tom Netten</MenuItem>
          <MenuItem value={30}>Peter Gijsselhart</MenuItem>
        </Select>
        <TextField
          className="new-report-text"
          id="standard-password-input"
          label="Stagemanager"
          defaultValue="Tom Netten"
          type="search"
          variant="outlined"
          margin="normal"
        />

        <TextField
          className="new-report-text"
          id="standard-search"
          label="Toneelmeester"
          defaultValue="Roy Schrauwen"
          type="search"
          variant="outlined"
          margin="normal"
        />
        <TextField
          className="new-report-text"
          label="Troubleshooter"
          defaultValue="Paul Uphus"
          id="margin-normal"
          margin="normal"
          variant="outlined"
        />
        <TextField
          className="new-report-text"
          label="Technicus"
          defaultValue="Peter Gijsselhart"
          id="margin-normal"
          margin="normal"
          variant="outlined"
        />
        <TextField
          className="new-report-text"
          label="Showcaller"
          defaultValue="Rens van Dijk"
          id="margin-normal"
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained">Save</Button>
      </div>
    </>
  );
};

export default NewReport;
