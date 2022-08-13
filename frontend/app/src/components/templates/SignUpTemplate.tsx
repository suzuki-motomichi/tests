import { Box, Container } from "@mui/system";
import React from "react";
import LinkCard from "../molecules/LinkCard";
import SignUpForm from "../organisms/SignUpForm";

const SignUpTemplate: React.FC = () => {
  return (
    <>
      <Container maxWidth="sm">
        <SignUpForm />
        <Box sx={{ mt: 3, mb: 3 }}>
          <LinkCard link={"/login"}>すでにアカウントをお持ちの方</LinkCard>
        </Box>
      </Container>
    </>
  );
};

export default SignUpTemplate;
