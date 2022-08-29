import React from "react";
import Box from "@mui/material/Box";

type Prop = {
  title: string;
};

const PageTitle: React.FC<Prop> = ({ title }) => {
  return <Box sx={titleStyle}>{title}</Box>;
};

const titleStyle = {
  fontSize: 20,
  fontWeight: "bold",
  mt: 2,
  mb: 2,
};

export default PageTitle;
