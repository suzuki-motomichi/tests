import { Box } from "@mui/system";
import { useState, ChangeEvent } from "react";
import { theme } from "../../style/theme";
import PageTitle from "../atoms/PageTitle";
import PrimaryButton from "../atoms/PrimaryButton";
import Textarea from "../atoms/Textarea";

const CircleRequest: React.FC = () => {
  // TODO: APIから取得する
  const [request, setRequest] = useState<boolean>(false);

  // TODO: 定型文考える
  const [text, setText] = useState<string>(
    "みなさんと仲良くなりたいです！よろしくお願いします！"
  );

  const handleClickButton = () => {
    console.log(text);
    if (!text) return;
    // APIにpostしたら setRequest true
    setRequest(true);
  };

  /**
   * サークル申請のテンプレート
   *
   * @returns
   */
  const textarea = () => {
    return (
      <>
        <Textarea
          minRows={7}
          placeholder={"よろしくお願いします！"}
          defaultValue={text}
          handleChangeText={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setText(e.target.value);
          }}
        />
        <Box sx={buttonStyle}>
          <PrimaryButton
            text={"サークルに申請する"}
            color={theme.palette.success.main}
            borderColor={theme.palette.success.main}
            textColor={theme.palette.textSecondary.main}
            handleClickButton={handleClickButton}
          />
        </Box>
      </>
    );
  };

  /**
   * 承認待ちのテンプレート
   *
   * @returns
   */
  const previewText = () => {
    return (
      <>
        <Box sx={textPreviewStyle}>{text}</Box>
        <Box sx={buttonStyle}>
          <PrimaryButton
            text={"承認待ち"}
            borderColor={theme.palette.success.main}
            color={theme.palette.common.white}
            textColor={theme.palette.success.main}
            handleClickButton={handleClickButton}
            disabled={true}
          />
        </Box>
      </>
    );
  };

  return (
    <Box sx={circleStyle}>
      <Box sx={titleStyle}>
        <PageTitle title={"自己紹介"} />
      </Box>
      {request ? previewText() : textarea()}
    </Box>
  );
};

const textPreviewStyle = {
  whiteSpace: "pre-line",
  width: 1,
  wordBreak: "break-all",
};

const circleStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const titleStyle = {
  textAlign: "start",
  width: "100%",
};

const buttonStyle = {
  width: 250,
  mt: 4,
  mb: 4,
};

export default CircleRequest;
