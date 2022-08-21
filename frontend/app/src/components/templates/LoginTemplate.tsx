import { Box, Container } from "@mui/system";
import React from "react";
import LinkCard from "../molecules/LinkCard";
import LoginForm from "../organisms/LoginForm";

const LoginTemplate: React.FC = () => {
  return (
    <>
      <Container maxWidth="sm">
        <LoginForm />
        <Box sx={{ mt: 3, mb: 3 }}>
          <LinkCard link={"/sign-up"}>アカウントをお持ちでない方</LinkCard>
        </Box>
      </Container>
    </>
  );
};

export default LoginTemplate;
