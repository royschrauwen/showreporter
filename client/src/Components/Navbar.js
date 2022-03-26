import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Paper from "@mui/material/Paper";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { Link } from "react-router-dom";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

const Navbar = ({ setCurrentPageName }) => {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        className="bottom-navbar"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          setCurrentPageName(newValue);
        }}
      >
        {/* <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={<HomeIcon />}
          value="Home"
        /> */}
        <BottomNavigationAction
          component={Link}
          to="/logboek"
          label="Logboek"
          value="Logboek"
          icon={<ListAltIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/logboek/nieuw"
          label="Nieuwe Log"
          value="Nieuwe Log"
          icon={<AddCircleOutlineIcon />}
        />

        {/* <BottomNavigationAction
          component={Link}
          to="/logboek/zoek"
          label="Zoek"
          value="Zoek"
          icon={<ManageSearchIcon />}
        /> */}
        {/* <BottomNavigationAction
          component={Link}
          to="/todo"
          label="ToDo"
          icon={<FormatListNumberedIcon />}
          value="ToDo"
        /> */}
        {/* <BottomNavigationAction
          label="ToDo List"
          icon={<FormatListNumberedIcon />}
        /> */}
      </BottomNavigation>
    </Paper>
  );
};

export default Navbar;
