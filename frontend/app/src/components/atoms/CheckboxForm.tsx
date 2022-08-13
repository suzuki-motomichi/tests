import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

type Prop = {
  label: string;
  checked: boolean;
  handleChangeCheck: (
    check: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) => void;
};

const CheckboxForm: React.FC<Prop> = ({
  label,
  checked,
  handleChangeCheck,
}) => {
  return (
    <FormControlLabel
      control={<Checkbox />}
      label={label}
      onChange={(e: React.SyntheticEvent<Element, Event>, checked: boolean) =>
        handleChangeCheck(e, checked)
      }
      checked={checked}
    />
  );
};

export default CheckboxForm;
