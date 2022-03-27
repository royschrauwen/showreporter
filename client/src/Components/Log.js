import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Log = ({ itemData }) => {
  //   console.log(itemData);

  const [activeLog, setActiveLog] = useState(false);

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

  var maxLength = 100;
  var bericht = itemData.bericht;

  const trimString = () => {
    var trimmedString = itemData.bericht.substr(0, maxLength);
    trimmedString = trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
    );
    bericht = itemData.toneelmeester + ": " + trimmedString + "...";
  };

  trimString();

  useEffect(() => {
    if (!activeLog) {
      trimString();
    } else {
      bericht = itemData.bericht;
    }
  }, [activeLog]);

  const handleLogClick = () => {
    window.location.replace("../log?id=" + itemData.log_id);
  };

  const formattedDatum =
    parseInt(itemData.datum.substr(8, 2)) +
    1 +
    " " +
    maanden[parseInt(itemData.datum.substr(5, 2)) - 1] +
    " " +
    itemData.datum.substr(0, 4);
  return (
    <>
      <ListItem
        sx={{
          width: "900px",
          maxWidth: "100vw",
        }}
        className="logListItem"
        onClick={handleLogClick}
      >
        <ListItemText primary={formattedDatum} secondary={bericht} />
      </ListItem>
      <Divider />

      {/* <h3>Datum: {itemData.datum}</h3>
      <p>
        <strong>Toneelmeester: {itemData.toneelmeester}</strong>
      </p>
      <p>{trimmedString + "..."}</p>
      <Divider />
       */}
    </>
  );
};

export default Log;
