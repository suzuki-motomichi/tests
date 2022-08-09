import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

type Prop = {
  text: string;
  color: string;
};

const PrimaryButton: React.FC<Prop> = ({ text, color }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        size="large"
        sx={{ mt: 1, mb: 1, width: 1, bgcolor: color }}
      >
        {text}
      </Button>
    </Stack>
  );
};

export default PrimaryButton;
