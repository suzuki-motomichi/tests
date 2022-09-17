import { Box } from "@mui/system";
import BasicCard from "../atoms/BasicCard";
import PageTitle from "../atoms/PageTitle";
import UserCount from "./UserCount";

const CircleTop: React.FC = () => {
  return (
    <Box sx={circleTopStyle}>
      <Box>
        <img
          src={`${process.env.PUBLIC_URL}/dummy_circle.png`}
          alt={"サークル画像"}
          loading="lazy"
        />
      </Box>
      <Box sx={titleStyle}>
        <PageTitle title={"ガチマネタイズサークル"} />
        <UserCount userCount={40} />
      </Box>
      <Box sx={{ mt: 2, mb: 2 }}>
        {/* APIできたら書き換える ここから */}
        <BasicCard>
          <Box sx={{ m: 2 }}>
            サークルから全体へのメッセージ(自由記述) 【当日参加者】
            ・当日参加者は毎回500円徴収します ・19:00~20:45
            ・なんか全体へのメッセージとか
          </Box>
        </BasicCard>
        {/* APIできたら書き換える ここまで */}
      </Box>
    </Box>
  );
};

const circleTopStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const titleStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  mt: 2,
};

export default CircleTop;
