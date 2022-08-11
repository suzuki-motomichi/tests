import React from "react";
import Input from "../atoms/Input";
import PasswordInput from "../atoms/PasswordInput";
import PrimaryButton from "../atoms/PrimaryButton";
import { Box, Container } from "@mui/system";
import CheckboxForm from "../atoms/CheckboxForm";
import Or from "../atoms/Or";
import { CardContent } from "@mui/material";
import BasicCard from "../atoms/BasicCard";

const SignUpForm: React.FC = () => {
  return (
    <>
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Box sx={{ mt: 8, mb: 5 }}>
          <h2>アカウント新規登録</h2>
        </Box>
        <BasicCard>
          <CardContent sx={cardContentStyle}>
            <Input label={"名前"} />
            <Input label={"メールアドレス"} />
            <PasswordInput />
            <Box sx={{ textAlign: "left" }}>
              <CheckboxForm label={"利用規約に同意する"} />
            </Box>
            <PrimaryButton text={"登録"} color={"#00B5EE"} />
            <Or />
            <PrimaryButton text={"LINEで登録"} color={"#03D230"} />
          </CardContent>
        </BasicCard>
      </Container>
    </>
  );
};

const cardContentStyle = {
  gap: 2,
  display: "flex",
  flexDirection: "column",
};

export default SignUpForm;
