import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Paper from "@mui/material/Paper";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

const Navbar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="New Report"
          icon={<AddCircleOutlineIcon />}
        />
        <BottomNavigationAction label="Show Reports" icon={<ListAltIcon />} />
        {/* <BottomNavigationAction
          label="ToDo List"
          icon={<FormatListNumberedIcon />}
        /> */}
      </BottomNavigation>
    </Paper>
  );
};

export default Navbar;
