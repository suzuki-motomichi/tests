import Box from "@mui/material/Box";
import BasicCard from "../atoms/BasicCard";
import IconText from "../molecules/IconText";
import PersonIcon from "@mui/icons-material/Person";

type Prop = {
  userCount: number;
};

const UserCount: React.FC<Prop> = ({ userCount }) => {
  return (
    <Box sx={{ height: 40 }}>
      <BasicCard padding={1}>
        <IconText
          icon={<PersonIcon fontSize={"medium"} />}
          text={userCount.toString()}
        />
      </BasicCard>
    </Box>
  );
};

export default UserCount;
