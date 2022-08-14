import "./App.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./style/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Global } from "@emotion/react";
import { style } from "./style/globalCss";

const App: React.FC = () => {
  const router = useRoutes(routes);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Global styles={style} />
        {router}
      </ThemeProvider>
    </>
  );
};

export default App;
