import React from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const ShowItemRadio = () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <span>Sparklers</span>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <CheckCircleIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <CancelIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default ShowItemRadio;
