import Card from "@mui/material/Card";
import { ReactNode } from "react";

type Children = {
  children: ReactNode;
};

const BasicCard: React.FC<Children> = ({ children }) => {
  return (
    <>
      <Card sx={{ height: 1 }}>{children}</Card>
    </>
  );
};

export default BasicCard;
