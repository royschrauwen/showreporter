import React from "react";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Log = ({ itemData }) => {
  //   console.log(itemData);
  var maxLength = 50;
  var trimmedString = itemData.bericht.substr(0, maxLength);
  trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  );
  return (
    <>
      <ListItem>
        <ListItemText
          primary={itemData.datum}
          secondary={itemData.toneelmeester + ": " + trimmedString + "..."}
        />
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
