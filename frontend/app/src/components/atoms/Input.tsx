import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type Prop = {
  label: string;
  handleChangeText: (text: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Prop> = ({ label, handleChangeText }) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { mt: 1, mb: 1, width: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={label}
        label={label}
        variant="outlined"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeText(e)
        }
      />
    </Box>
  );
};

export default Input;
