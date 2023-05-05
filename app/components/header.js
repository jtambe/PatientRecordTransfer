import React from "react";
import {
    Typography
} from '@mui/material';

function Header({title}) {
  const headerStyle = {
    display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "120px",
  textAlign: "center",
  };

  const titleStyle = {
    color: "#3F51B5", 
    fontWeight: "bold",
    fontSize: "50px",
  };

  return (
    <div style={headerStyle}>
      <Typography variant="h6" style={titleStyle}>
        {title} 
      </Typography>
    </div>
  );
}

export default Header;



