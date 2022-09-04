import Box from "@mui/material/Box";
import { SvgIconProps } from "@mui/material";

type Prop = {
  icon: React.ReactElement<SvgIconProps>;
  text: string;
};

const IconText: React.FC<Prop> = ({ icon, text }) => {
  return (
    <>
      <Box sx={iconTextStyle}>
        {icon}
        {text}
      </Box>
    </>
  );
};

const iconTextStyle = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export default IconText;
