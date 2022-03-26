import React, { useState, useEffect } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const NewLogPage = () => {
  const handleSaveButton = async () => {
    if (logDatum !== "" && logToneelmeester !== "" && logBericht !== "") {
      await submitPost();
      window.location.replace("../logboek/");
    }
  };

  useEffect(() => {
    setLogDatum(today);
    setLogToneelmeester("Roy Schrauwen");
  }, []);

  const [logDatum, setLogDatum] = useState("");
  const [logToneelmeester, setLogToneelmeester] = useState("");
  const [logBericht, setLogBericht] = useState("");

  const submitPost = () => {
    axios.post("http://192.168.2.4:3002/api/create", {
      datum: logDatum,
      toneelmeester: logToneelmeester,
      bericht: logBericht,
    });
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "-" + mm + "-" + yyyy;

  return (
    <div className="new-log-form">
      <div className="new-log-input">
        <TextField
          required
          id="standard-required"
          label="Datum"
          variant="outlined"
          margin="normal"
          defaultValue={today}
          onChange={(e) => {
            setLogDatum(e.target.value);
          }}
        />
      </div>
      <div className="new-log-input">
        {/* <FormControl fullWidth> */}
        {/* <InputLabel id="demo-simple-select-label">Toneelmeester</InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Toneelmeester"
          onChange={handleChange}
        >
          <MenuItem value="Tom Netten">Tom Netten</MenuItem>
          <MenuItem value="Paul Uphus">Paul Uphus</MenuItem>
          <MenuItem value="Rens van Dijk">Rens van Dijk</MenuItem>
          <MenuItem value="Peter Gijselhart">Peter Gijselhart</MenuItem>
          <MenuItem value="Roy Schrauwen">Roy Schrauwen</MenuItem>
          <MenuItem value="Anders...">Anders...</MenuItem>
        </Select> */}
        {/* </FormControl> */}
        <TextField
          required
          id="standard-required"
          label="Toneelmeester"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            setLogToneelmeester(e.target.value);
          }}
        />
      </div>
      <div className="new-log-input">
        <TextField
          required
          multiline
          id="standard-required"
          label="Theater"
          variant="outlined"
          margin="normal"
        />
      </div>
      <div className="new-log-input">
        <TextField
          required
          multiline
          id="standard-required"
          label="Show"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            setLogBericht(e.target.value);
          }}
        />
      </div>

      <div className="new-log-input">
        <TextField
          required
          multiline
          id="standard-required"
          label="Foyer"
          variant="outlined"
          margin="normal"
        />
      </div>

      <div className="new-log-input">
        <TextField
          required
          multiline
          id="standard-required"
          label="Schoonmaak"
          variant="outlined"
          margin="normal"
        />
      </div>

      <div className="new-log-input">
        <button
          onClick={handleSaveButton}
          className="new-log-input-button"
          variant="contained"
        >
          Opslaan
        </button>
      </div>
    </div>
  );
};

export default NewLogPage;
