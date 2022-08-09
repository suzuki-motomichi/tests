import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type Prop = {
  label: string;
};

const Input: React.FC<Prop> = ({ label }) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { mt: 1, mb: 1, width: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={label} variant="outlined" />
    </Box>
  );
};

export default Input;
