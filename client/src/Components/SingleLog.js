import React, { useState, useEffect } from "react";

import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

let checkmarkOrCross = (input) => {
  if (input === 1) {
    return "\u2705";
  } else {
    return "\u274C";
  }
};

const SingleLog = ({ logData }) => {
  const maanden = [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december",
  ];

  const dagen = [
    "zondag",
    "maandag",
    "dinsdag",
    "woensdag",
    "donderdag",
    "vrijdag",
    "zaterdag",
  ];

  const datum = logData[0].datum;
  let formattedDatum = datum;

  // function convertDatum(datum) {
  //   const formattedDatum =
  //     parseInt(datum.substr(8, 2)) +
  //     1 +
  //     " " +
  //     maanden[parseInt(datum.substr(5, 2)) - 1] +
  //     " " +
  //     datum.substr(0, 4);
  //   return formattedDatum;
  // }

  const timeZoneDatum = new Date(datum);
  //console.log(timeZoneDatum);
  const timeZoneDatumFormatted =
    dagen[timeZoneDatum.getDay()] +
    " " +
    timeZoneDatum.getDate() +
    " " +
    maanden[timeZoneDatum.getMonth()] +
    " " +
    timeZoneDatum.getFullYear();
  console.log(timeZoneDatumFormatted);

  formattedDatum = timeZoneDatumFormatted;

  const handleEditClick = () => {
    alert("Bericht wijzigen is nog niet mogelijk");
  };

  return (
    <div className="single-log">
      <div className="single-log-header">
        <h2>{formattedDatum}</h2>
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="edit log"
            component="span"
            onClick={handleEditClick}
          >
            <EditIcon />
          </IconButton>
        </label>
      </div>
      <h3>{logData[0].toneelmeester}</h3>
      <div className="showData">
        <ul>
          <li>
            <span>Voorstellingnummer:</span> {logData[0].shownummer}
          </li>
          <li>
            <span>Aantal bezoekers:</span> {logData[0].bezoekers}
          </li>
        </ul>
      </div>
      <fieldset>
        <legend>Theater</legend>
        <p>{logData[0].theater}</p>
      </fieldset>
      <fieldset>
        <legend>Show</legend>
        <p>{logData[0].bericht}</p>
      </fieldset>
      <fieldset>
        <legend>Schoonmaak</legend>

        <p>{logData[0].schoonmaak}</p>

        <div className="schoonmaaklijst-singlelog">
          <ul>
            <li>Vegen schijf: {checkmarkOrCross(logData[0].vegen_schijf)}</li>
            <li>Vegen toneel: {checkmarkOrCross(logData[0].vegen_toneel)}</li>
            <li>Vegen opgangen: {checkmarkOrCross(logData[0].vegen_opgang)}</li>
            <li>
              Vegen achtertoneel:{" "}
              {checkmarkOrCross(logData[0].vegen_achtertoneel)}
            </li>
            <li>
              Dweilen schijf: {checkmarkOrCross(logData[0].dweilen_schijf)}
            </li>
            <li>
              Dweilen toneel: {checkmarkOrCross(logData[0].dweilen_toneel)}
            </li>
            <li>
              Dweilen opgangen: {checkmarkOrCross(logData[0].dweilen_opgang)}
            </li>
            <li>
              Dweilen balletvloer:{" "}
              {checkmarkOrCross(logData[0].dweilen_balletvloer)}
            </li>
            <li>
              Afvalbak opgang links:{" "}
              {checkmarkOrCross(logData[0].vuilnis_opgang_links)}
            </li>
            <li>
              Afvalbak opgang rechts:{" "}
              {checkmarkOrCross(logData[0].vuilnis_opgang_rechts)}
            </li>
            <li>
              Afvalbak werkplaats:{" "}
              {checkmarkOrCross(logData[0].vuilnis_werkplaats)}
            </li>
            <li>
              Afvalbak achtertoneel:{" "}
              {checkmarkOrCross(logData[0].vuilnis_achtertoneel)}
            </li>
            <li>
              Afvalbak kantoor: {checkmarkOrCross(logData[0].vuilnis_kantoor)}
            </li>
          </ul>
        </div>
      </fieldset>
      <fieldset>
        <legend>Overig</legend>
        <p>{logData[0].overig}</p>
      </fieldset>
    </div>
  );
};

export default SingleLog;
