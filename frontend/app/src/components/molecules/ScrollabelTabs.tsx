import React, { useLayoutEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

type Prop = {
  index: number;
};

type CircleArray = {
  uuid: string;
  name: string;
};

const ScrollabelTabs: React.FC<Prop> = ({ index }) => {
  const [value, setValue] = React.useState(index);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    setValue(index);
  }, [index]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // TODO: JsonServerから取得するようにする
  const circleArray: CircleArray[] = [
    { uuid: "a026055c-d09e-eb71-f84d-484a75803a3f", name: "サークル1" },
    { uuid: "b026055c-d09e-eb71-f84d-484a75803a3f", name: "サークル2" },
    { uuid: "c026055c-d09e-eb71-f84d-484a75803a3f", name: "サークル3" },
    { uuid: "d026055c-d09e-eb71-f84d-484a75803a3f", name: "サークル4" },
    { uuid: "e026055c-d09e-eb71-f84d-484a75803a3f", name: "サークル5" },
  ];

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
      >
        {circleArray.map((circle, i) => {
          return (
            <Tab
              label={circle.name}
              key={circle.uuid}
              onClick={() =>
                navigate("/circle/" + circle.uuid, {
                  state: { circleIndex: i, circleName: circle.name },
                })
              }
            />
          );
        })}
      </Tabs>
    </Box>
  );
};

export default ScrollabelTabs;
