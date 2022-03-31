import React, { useEffect, useState } from "react";
import Log from "./Log";
import List from "@mui/material/List";
import axios from "axios";
import TextField from "@mui/material/TextField";

const LogboekList = () => {
  const [logboekItems, setLogboekItems] = useState([]);
  const [zoekterm, setZoekterm] = useState("");

  useEffect(() => {
    showAllLogs();
  }, []);

  useEffect(() => {
    if (zoekterm === "") {
      showAllLogs();
    } else {
      searchLogs(zoekterm);
    }
  }, [zoekterm]);

  const showAllLogs = () => {
    axios("http://localhost:3002/api/logs").then((response) => {
      setLogboekItems(response.data);
    });
  };

  const searchLogs = (query) => {
    const queryString = "http://localhost:3002/api/logs/zoek/" + query;
    axios(queryString).then((response) => {
      setLogboekItems(response.data);
      // console.log(response.data);
    });
  };

  const handleSearchClick = () => {
    // console.log("zoek: " + zoekterm);
    if (zoekterm !== "") searchLogs(zoekterm);
  };

  return (
    <>
      <div className="logboek-zoek-container">
        <TextField
          className="zoekInput"
          type="search"
          value={zoekterm}
          onChange={(e) => {
            setZoekterm(e.target.value);
          }}
        ></TextField>
        <button className="zoekKnop" onClick={handleSearchClick}>
          Zoek
        </button>
      </div>
      <nav>
        <List
          sx={{ width: "100%", maxWidth: 1000, bgcolor: "background.paper" }}
        >
          {logboekItems.map(function (itemData, key) {
            return <Log itemData={itemData} key={key} />;
          })}
        </List>
      </nav>
    </>
  );
};

export default LogboekList;
