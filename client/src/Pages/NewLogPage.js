import React, { useState, useEffect } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import InputLabel from "@mui/material/InputLabel";

// import Checkbox from "@mui/material/Checkbox";
// import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
// import Favorite from "@mui/icons-material/Favorite";
// import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";

// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormLabel from "@mui/material/FormLabel";

// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const schoonmaakLijst = [
  {
    name: "Schijf vegen",
  },
  {
    name: "Toneel vegen",
  },
  {
    name: "Opgang L+R vegen",
  },
  {
    name: "Achtertoneel vegen",
  },
  {
    name: "Schijf dweilen",
  },
  {
    name: "Toneel dweilen",
  },
  {
    name: "Opgang L+R dweilen",
  },
  {
    name: "Balletvloer dweilen",
  },
  {
    name: "Afvalbak Opgang Links",
  },
  {
    name: "Afvalbak Opgang Rechts",
  },
  {
    name: "Afvalbak Werkplaats",
  },
  {
    name: "Afvalbak Kleedkamers achtertoneel",
  },
  {
    name: "Afvalbak Kantoor",
  },
];

const elektrischeTrekkenLijst = ["Lieren", "Staalkabels", "Keerwielen"];
const puntTrekkenLijst = ["Ophangpunten", "Kettingen", "Loopwagens"];
const bruggenLijst = ["Valbeveiliging", "Lampen/Decor"];

const NewLogPage = () => {
  const handleSaveButton = async () => {
    if (logDatum !== "" && logToneelmeester !== "") {
      await submitPost();
      //alert("invoer succesvol opgeslagen");
      //window.location.replace("../logboek/");
    }
  };

  useEffect(() => {
    setLogDatum(today);
    setLogToneelmeester("Roy Schrauwen");
  }, []);

  const [logDatum, setLogDatum] = useState("");
  const [logToneelmeester, setLogToneelmeester] = useState("");
  const [logBericht, setLogBericht] = useState("");
  const [logTheater, setLogTheater] = useState("");
  const [logSchoonmaak, setLogSchoonmaak] = useState("");
  const [logOverig, setLogOverig] = useState("");
  const [logNooduitgangen, setLogNooduitgangen] = useState("");

  // Checkboxes van de schoonmaaklijst
  const [checkedState, setCheckedState] = useState(
    new Array(schoonmaakLijst.length).fill(false)
  );

  // Checkboxes van de rigginglijsten
  const [elektrischeTrekkenState, setElektrischeTrekkenState] = useState(
    new Array(elektrischeTrekkenLijst.length).fill(false)
  );

  const [puntTrekkenState, setPuntTrekkenState] = useState(
    new Array(puntTrekkenLijst.length).fill(false)
  );

  const [bruggenState, setBruggenState] = useState(
    new Array(bruggenLijst.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  // const [expanded, setExpanded] = useState(false);

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };

  function toggleCheckbox(box) {
    setLogNooduitgangen(!logNooduitgangen);
  }

  const submitPost = () => {
    axios
      .post("http://localhost:3002/api/create", {
        datum: logDatum,
        toneelmeester: logToneelmeester,
        bericht: logBericht,
        theater: logTheater,
        schoonmaak: logSchoonmaak,
        schoonmaakchecklist: checkedState,
        elektrischeTrekken: elektrischeTrekkenState,
        puntTrekken: puntTrekkenState,
        bruggen: bruggenState,
        overig: logOverig,
      })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          window.location.replace("../logboek/");
        } else {
          alert("Priobleem met opslaan. Geef even door aan Roy aub.");
        }
      });
  };

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "-" + mm + "-" + yyyy;

  return (
    <div className="new-log-form">
      <div>
        <h2>Nieuwe Log</h2>
      </div>
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
          multiline
          id="standard-required"
          label="Opmerkingen Theater"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            setLogTheater(e.target.value);
          }}
        />
      </div>

      <div>
        <h2>Rigging & Veiligheid</h2>
      </div>

      <div className="new-log-input">
        <div className="schoonmaak-list">
          <h5>Elektrische Trekken</h5>
          {elektrischeTrekkenLijst.map((item, index) => (
            <div key={index}>
              <input
                value={item}
                type="checkbox"
                onChange={() => handleOnChange(index)}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="schoonmaak-list">
          <h5>Punttrekken</h5>
          {puntTrekkenLijst.map((item, index) => (
            <div key={index}>
              <input
                value={item}
                type="checkbox"
                onChange={() => handleOnChange(index)}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="schoonmaak-list">
          <h5>Bruggen</h5>
          {bruggenLijst.map((item, index) => (
            <div key={index}>
              <input
                value={item}
                type="checkbox"
                onChange={() => handleOnChange(index)}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="schoonmaak-list">
          <h5>Algemeen</h5>
          <div key="12345">
            <input
              value="nooduitgangen"
              type="checkbox"
              onChange={() => toggleCheckbox()}
            />
            <span>Nooduitgangen</span>
          </div>
        </div>
      </div>

      <div>
        <h2>Show</h2>
      </div>

      <div className="new-log-input">
        <TextField
          multiline
          id="standard-required"
          label="Opmerkingen Show"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            setLogBericht(e.target.value);
          }}
        />
        <div className="show-data">
          <TextField
            className="show-data-field"
            id="standard-required"
            label="Aantal bezoekers"
            variant="outlined"
            margin="normal"
            onChange={(e) => {
              setLogBericht(e.target.value);
            }}
          />
          <TextField
            className="show-data-field"
            id="standard-required"
            label="Voorstellingnummer"
            variant="outlined"
            margin="normal"
            onChange={(e) => {
              setLogBericht(e.target.value);
            }}
          />
        </div>
      </div>

      <div>
        <h2>Schoonmaak</h2>
      </div>

      <div className="new-log-input">
        <TextField
          multiline
          id="standard-required"
          label="Opmerkingen Schoonmaak"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            setLogSchoonmaak(e.target.value);
          }}
        />
      </div>

      <div className="new-log-input">
        <div className="schoonmaak-list">
          {schoonmaakLijst.map((item, index) => (
            <div key={index}>
              <input
                value={item.name}
                type="checkbox"
                onChange={() => handleOnChange(index)}
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Overige zaken</h2>
      </div>

      <div className="new-log-input">
        <TextField
          multiline
          id="standard-required"
          label="Overige opmerkingen"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            setLogOverig(e.target.value);
          }}
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
