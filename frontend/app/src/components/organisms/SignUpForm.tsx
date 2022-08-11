import React from "react";
import Input from "../atoms/Input";
import PasswordInput from "../atoms/PasswordInput";
import PrimaryButton from "../atoms/PrimaryButton";
import { Box } from "@mui/system";
import CheckboxForm from "../atoms/CheckboxForm";
import Or from "../atoms/Or";
import { CardContent } from "@mui/material";
import BasicCard from "../atoms/BasicCard";
import { useCallback, useState } from "react";

const SignUpForm: React.FC = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isAgreement, setIsAgreement] = useState(false);

  const handleChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    [setName]
  );

  const handleChangeMail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMail(e.target.value);
    },
    [setMail]
  );

  const handleChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  const handleChangeAgreement = useCallback(
    (e: React.SyntheticEvent<Element, Event>, checked: boolean) => {
      setIsAgreement(checked);
    },
    [setIsAgreement]
  );

  const handleClickButton = () => {
    console.log({ name });
    console.log({ mail });
    console.log({ password });
    console.log({ isAgreement });
  };

  return (
    <>
      <Box sx={{ textAlign: "center", m: 0 }}>
        <Box sx={{ mt: 8, mb: 5 }}>
          <h2>アカウント新規登録</h2>
        </Box>
        <BasicCard>
          <CardContent sx={cardContentStyle}>
            <Input label={"名前"} handleChangeText={handleChangeName} />
            <Input label={"メールアドレス"} handleChangeText={handleChangeMail} />
            <PasswordInput handleChangePassword={handleChangePassword} />
            <Box sx={{ textAlign: "left" }}>
              <CheckboxForm
                label={"利用規約に同意する"}
                handleChangeCheck={handleChangeAgreement}
                checked={isAgreement}
              />
            </Box>
            <PrimaryButton
              handleClickButton={handleClickButton}
              text={"登録"}
              color={"#00B5EE"}
            />
            <Or />
            <PrimaryButton
              handleClickButton={handleClickButton}
              text={"LINEで登録"}
              color={"#03D230"}
            />
          </CardContent>
        </BasicCard>
      </Box>
    </>
  );
};

const cardContentStyle = {
  gap: 2,
  display: "flex",
  flexDirection: "column",
};

export default SignUpForm;
