import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

type Prop = {
  label: string;
};

const CheckboxForm: React.FC<Prop> = ({ label }) => {
  return <FormControlLabel control={<Checkbox />} label={label} />;
};

export default CheckboxForm;
