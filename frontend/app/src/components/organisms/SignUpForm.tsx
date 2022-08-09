import React from "react";
// import { css } from "@emotion/react";
import Input from "../atoms/Input";
import PasswordInput from "../atoms/PasswordInput";
import PrimaryButton from "../atoms/PrimaryButton";
import { Box, Container } from "@mui/system";
import CheckboxForm from "../atoms/CheckboxForm";

const SignUpForm: React.FC = () => {
  return (
    <>
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Box sx={{ mt: 8 }}>
          <h2>アカウント新規登録</h2>
        </Box>
        <Box sx={backgroundStyle}>
          <Container sx={{ width: "95%" }}>
            <Input label={"名前"} />
            <Input label={"メールアドレス"} />
            <PasswordInput />
            <Box sx={{ textAlign: "left" }}>
              <CheckboxForm label={"利用規約に同意する"} />
            </Box>
            <PrimaryButton text={"登録"} color={"#00B5EE"} />
            <Box sx={orStyle}>または</Box>
            <PrimaryButton text={"LINEで登録"} color={"#03D230"} />
          </Container>
        </Box>
      </Container>
    </>
  );
};

const backgroundStyle = {
  bgcolor: "#fff",
  alignItems: "center",
  pt: 5,
  pb: 5,
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

export default SignUpForm;
