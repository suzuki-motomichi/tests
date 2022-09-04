import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

type Prop = {
  text: string;
  color: string;
  textColor: string;
  borderColor: string;
  disabled?: boolean;
  handleClickButton: (
    value: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const PrimaryButton: React.FC<Prop> = ({
  text,
  color,
  textColor,
  borderColor,
  disabled,
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
          fontWeight: "bold",
          color: textColor,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: borderColor,
          "&:hover": { backgroundColor: color },
        }}
        disabled={disabled}
      >
        {text}
      </Button>
    </Stack>
  );
};

PrimaryButton.defaultProps = {
  disabled: false,
};

export default PrimaryButton;
