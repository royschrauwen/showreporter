import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";

function MainPage() {
  //   const [postList, setPostList] = useState([]);
  const [logs, setLogs] = useState("");

  const getAllLogs = async () => {
    await Axios.get("http://localhost:3002/api/logs")
      .then((response) => {
        const allLogs = response.data;
        setLogs(allLogs);
        console.log(`logs: ${logs}`);
        // console.log("allLogs: " + allLogs);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getAllLogs();
    // Axios.get("http://localhost:3002/api/logs").then((data) => {
    //   setPostList(data.data);
    //   //   console.log(data.data);
    //   //   console.log(data.data[0].toneelmeester);
    //   //   console.log("postList: " + postList);
    // });
  }, []);

  return (
    <div className="MainPage">
      <div className="PostContainer">Logs</div>
      <p>{console.log("logsss: " + logs)}</p>
      {/* <p>{logs[0].toneelmeester}</p> */}
    </div>
  );
}

export default MainPage;
