import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

type Prop = {
  text: string;
  color: string;
  textColor: string;
  handleClickButton: (
    value: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const PrimaryButton: React.FC<Prop> = ({
  text,
  color,
  textColor,
  handleClickButton,
}) => {
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          handleClickButton(e)
        }
        variant="contained"
        size="large"
        sx={{
          mt: 1,
          mb: 1,
          width: 1,
          bgcolor: color,
          "&:hover": { backgroundColor: color },
          color: textColor,
        }}
      >
        {text}
      </Button>
    </Stack>
  );
};

export default PrimaryButton;
