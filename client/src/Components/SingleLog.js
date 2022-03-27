import React from "react";

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

  const datum = logData[0].datum;

  function convertDatum(datum) {
    const formattedDatum =
      parseInt(datum.substr(8, 2)) +
      1 +
      " " +
      maanden[parseInt(datum.substr(5, 2)) - 1] +
      " " +
      datum.substr(0, 4);
    return formattedDatum;
  }

  return (
    <div className="single-log">
      <h2>{datum}</h2>
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
      </fieldset>
      <fieldset>
        <legend>Overig</legend>
        <p>{logData[0].overig}</p>
      </fieldset>
    </div>
  );
};

export default SingleLog;
