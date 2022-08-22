import { css } from "@emotion/react";
import { theme } from "./theme";

export const style = css`
  html,
  body {
    margin-top: 65px;
  }
  img {
    max-width: 100%;
  }
  a {
    text-decoration: none;
    color: ${theme.palette.text.primary};
  }
`;
