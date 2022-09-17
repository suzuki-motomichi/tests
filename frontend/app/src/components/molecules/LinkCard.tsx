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
        <Box sx={textStyle}>
          {children}
          <Box sx={arrowStyle}>
            <KeyboardArrowRightIcon />
          </Box>
        </Box>
      </BasicCard>
    </Link>
  );
};

const textStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  p: 1,
  m: 2,
};

const arrowStyle = {
  pl: 1,
  display: "flex",
  alignItems: "center",
};

export default LinkCard;
