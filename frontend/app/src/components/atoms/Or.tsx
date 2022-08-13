import React from "react";
import Box from "@mui/material/Box";

const Or: React.FC = () => {
  return <Box sx={orStyle}>または</Box>;
};

const orStyle = {
  display: "flex",
  alignItems: "center",
  "&::before, &::after": {
    borderTop: "solid 1px",
    content: '""',
    flexGrow: 1,
  },
  "&::before": {
    mr: 1,
  },
  "&::after": {
    ml: 1,
  },
};

export default Or;
