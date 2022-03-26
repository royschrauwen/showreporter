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

  //   const formattedDatum =
  //     parseInt(datum.substr(8, 2)) +
  //     1 +
  //     " " +
  //     maanden[parseInt(datum.substr(5, 2)) - 1] +
  //     " " +
  //     datum.substr(0, 4);

  return (
    <div className="single-log">
      <h2>{datum}</h2>
      <h3>{logData[0].toneelmeester}</h3>
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
        <p>
          <ul>
            <li>Vloer dweilen &#10004;</li>
            <li>Draaischijf dweilen &#10004;</li>
            <li>Tom's bureau dweilen &#10060;</li>
          </ul>
        </p>
        <p>{logData[0].schoonmaak}</p>
      </fieldset>
      <fieldset>
        <legend>Overig</legend>
        <p>-</p>
      </fieldset>
    </div>
  );
};

export default SingleLog;
