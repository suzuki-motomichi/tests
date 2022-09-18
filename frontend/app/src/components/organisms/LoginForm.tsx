import React from "react";
import Input from "../atoms/Input";
import PasswordInput from "../atoms/PasswordInput";
import PrimaryButton from "../atoms/PrimaryButton";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Or from "../atoms/Or";
import { CardContent } from "@mui/material";
import BasicCard from "../atoms/BasicCard";
import { theme } from "../../style/theme";

type State = {
  mail: string;
  password: string;
  isAgreement: boolean;
};

const LoginForm: React.FC = () => {
  const [values, setValues] = React.useState<State>({
    mail: "",
    password: "",
    isAgreement: false,
  });

  const handleStateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleClickButton = () => {
    console.log({ values });
  };

  return (
    <>
      <Box sx={{ textAlign: "center", m: 0 }}>
        <Box sx={{ mt: 8, mb: 5 }}>
          <h2>ログイン</h2>
        </Box>
        <BasicCard>
          <CardContent sx={cardContentStyle}>
            <Input
              name={"mail"}
              label={"メールアドレス"}
              handleChangeText={handleStateInputChange}
            />
            <PasswordInput handleChangePassword={handleStateInputChange} />
            <PrimaryButton
              handleClickButton={handleClickButton}
              text={"登録"}
              borderColor={theme.palette.primary.main}
              color={theme.palette.primary.main}
              textColor={theme.palette.textSecondary.main}
            />
            <Link to="#">パスワードをお忘れの方</Link>
            <Or />
            <Box sx={warningText}>\ワンタッチでログイン/</Box>
            <PrimaryButton
              handleClickButton={handleClickButton}
              text={"LINEでログイン"}
              color={theme.palette.line.main}
              borderColor={theme.palette.line.main}
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
  m: 2,
};
const warningText = {
  color: "warningText.main",
};

export default LoginForm;
