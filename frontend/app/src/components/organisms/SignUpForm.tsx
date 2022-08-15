import React from "react";
import Input from "../atoms/Input";
import PasswordInput from "../atoms/PasswordInput";
import PrimaryButton from "../atoms/PrimaryButton";
import { Box } from "@mui/system";
import CheckboxForm from "../atoms/CheckboxForm";
import Or from "../atoms/Or";
import { CardContent } from "@mui/material";
import BasicCard from "../atoms/BasicCard";
import { theme } from "../../style/theme";

type State = {
  name: string;
  mail: string;
  password: string;
  isAgreement: boolean;
};

const SignUpForm: React.FC = () => {
  const [values, setValues] = React.useState<State>({
    name: "",
    mail: "",
    password: "",
    isAgreement: false,
  });

  const handleStateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleStateIsAgreementChange = (
    e: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    setValues({ ...values, isAgreement: checked });
  };

  const handleClickButton = () => {
    // console.log({ values });
  };

  return (
    <>
      <Box sx={{ textAlign: "center", m: 0 }}>
        <Box sx={{ mt: 8, mb: 5 }}>
          <h2>アカウント新規登録</h2>
        </Box>
        <BasicCard>
          <CardContent sx={cardContentStyle}>
            <Input
              name={"name"}
              label={"名前"}
              handleChangeText={handleStateInputChange}
            />
            <Input
              name={"mail"}
              label={"メールアドレス"}
              handleChangeText={handleStateInputChange}
            />
            <PasswordInput handleChangePassword={handleStateInputChange} />
            <Box sx={{ textAlign: "left" }}>
              <CheckboxForm
                label={"利用規約に同意する"}
                handleChangeCheck={handleStateIsAgreementChange}
                checked={values.isAgreement}
              />
            </Box>
            <PrimaryButton
              handleClickButton={handleClickButton}
              text={"登録"}
              color={theme.palette.primary.main}
              textColor={theme.palette.textSecondary.main}
            />
            <Or />
            <PrimaryButton
              handleClickButton={handleClickButton}
              text={"LINEで登録"}
              color={theme.palette.line.main}
              textColor={theme.palette.textSecondary.main}
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
