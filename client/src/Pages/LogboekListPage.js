import React from "react";
import LogboekList from "../Components/LogboekList";
import { Link } from "react-router-dom";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const handleNewButton = async () => {
  window.location.replace("/logboek/nieuw");
};

const LogboekListPage = () => {
  return (
    <>
      <div className="logboeklistpagecontainer">
        <LogboekList />
      </div>
      <Link to="/logboek/nieuw">
        <button className="FAB-niew-log">
          <AddIcon />
        </button>
      </Link>
    </>
  );
};

export default LogboekListPage;
