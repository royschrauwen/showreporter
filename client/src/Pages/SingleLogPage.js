import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleLog from "../Components/SingleLog";

const urlParams = new URLSearchParams(window.location.search);
const log_id = urlParams.get("id");
console.log(log_id);

const SingleLogPage = () => {
  const [logData, setLogData] = useState([""]);

  var myLogData = [];

  //   showLog();
  useEffect(() => {
    const showLog = async () => {
      var url = "http://192.168.2.4:3002/api/log/" + log_id;
      await axios(url).then((response) => {
        setLogData(response.data);
        console.log(response.data);
        myLogData = response.data;
        console.log("myLogData: " + myLogData);
        console.table(myLogData);
      });
    };
    console.log("test1");
    showLog();
    console.log("test2");
  }, []);

  return (
    <div className="single-log-container">
      {/* <h3>SingleLogPage: {log_id}</h3> */}
      <SingleLog logData={logData} />
    </div>
  );
};

export default SingleLogPage;
