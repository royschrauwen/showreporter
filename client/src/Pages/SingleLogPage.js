import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleLog from "../Components/SingleLog";

const urlParams = new URLSearchParams(window.location.search);
const log_id = urlParams.get("id");

const SingleLogPage = () => {
  const [logData, setLogData] = useState([""]);

  useEffect(() => {
    const showLog = async () => {
      var url = "http://localhost:3002/api/log/" + log_id;
      await axios(url).then((response) => {
        setLogData(response.data);
      });
    };
    showLog();
  }, []);

  return (
    <div className="single-log-container">
      <SingleLog logData={logData} />
    </div>
  );
};

export default SingleLogPage;
