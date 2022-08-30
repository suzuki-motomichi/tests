/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type Prop = {
  text: string;
  lineClamp: number;
};

const ClampText: React.FC<Prop> = ({ text, lineClamp }) => {
  return <p css={textStyle(lineClamp)}>{text}</p>;
};

const textStyle = (lineClamp: number) => {
  return css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lineClamp};
    overflow: hidden;

    font-size: 12px;
    margin: 0;
  `;
};

export default ClampText;
