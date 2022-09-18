import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useState, ChangeEvent } from "react";

type Prop = {
  minRows: number;
  placeholder: string;
  defaultValue: string;
  handleChangeText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea: React.FC<Prop> = ({
  minRows,
  placeholder,
  defaultValue,
  handleChangeText,
}) => {
  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={minRows}
      placeholder={placeholder}
      style={textareaStyle}
      defaultValue={defaultValue}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
        handleChangeText(e);
      }}
    />
  );
};

const textareaStyle = {
  width: "100%",
  padding: 10,
  fontSize: 16,
  borderStyle: "none",
};

export default Textarea;
