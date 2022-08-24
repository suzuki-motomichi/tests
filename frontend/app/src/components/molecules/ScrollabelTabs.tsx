import React, { useLayoutEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

type Obj =
  | {
      id: number;
      uuid?: string;
      name: string;
    }
  | {
      id?: number;
      uuid: string;
      name: string;
    };

type Prop = {
  index: number;
  array: Obj[];
  handleClickTab: (array: any) => void;
};

const ScrollabelTabs: React.FC<Prop> = ({ index, array, handleClickTab }) => {
  const [value, setValue] = React.useState(index);

  useLayoutEffect(() => {
    setValue(index);
  }, [index]);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
      >
        {array.map((array, i) => {
          return (
            <Tab
              label={array.name}
              key={i}
              onClick={() => handleClickTab(array)}
            />
          );
        })}
      </Tabs>
    </Box>
  );
};

export default ScrollabelTabs;
