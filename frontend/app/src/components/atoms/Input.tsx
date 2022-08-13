import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type Prop = {
  name: string;
  label: string;
  handleChangeText: (text: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Prop> = ({ name, label, handleChangeText }) => {
  const [values, setValues] = React.useState("");
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
        name={name}
        label={label}
        variant="outlined"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValues(e.target.value);
          handleChangeText(e);
        }}
        value={values}
      />
    </Box>
  );
};

export default Input;
