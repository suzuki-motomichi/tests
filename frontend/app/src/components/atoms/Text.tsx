/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type Prop = {
  text: string;
};

const Text: React.FC<Prop> = ({ text }) => {
  return <p css={textStyle}>{text}</p>;
};

const textStyle = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  font-size: 12px;
  margin: 0;
`;

export default Text;
