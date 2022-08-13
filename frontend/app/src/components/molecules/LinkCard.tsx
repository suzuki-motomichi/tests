import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import BasicCard from "../atoms/BasicCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box } from "@mui/system";

type Children = {
  children: ReactNode;
  link: string;
};

const LinkCard: React.FC<Children> = ({ children, link }) => {
  return (
    <Link to={link}>
      <BasicCard>
        <Box sx={style}>
          {children}
          <Box sx={{ pl: 1 }}>
            <KeyboardArrowRightIcon />
          </Box>
        </Box>
      </BasicCard>
    </Link>
  );
};

const style = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  p: 1,
};

export default LinkCard;
