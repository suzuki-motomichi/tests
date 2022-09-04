import Card from "@mui/material/Card";
import { ReactNode } from "react";

type Children = {
  children: ReactNode;
  padding?: number;
};

const BasicCard: React.FC<Children> = ({ children, padding }) => {
  return (
    <>
      <Card
        sx={{
          p: padding,
          height: "100%",
        }}
      >
        {children}
      </Card>
    </>
  );
};

BasicCard.defaultProps = {
  padding: 2,
};

export default BasicCard;
