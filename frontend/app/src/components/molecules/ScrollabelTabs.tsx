import React, { useLayoutEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ScrollTab } from "../../lib/types/componentsTypes";

type Prop = {
  index: number;
  array: ScrollTab[];
  handleClickTab: (array: ScrollTab) => void;
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
        {array.map((obj, i) => {
          return (
            <Tab label={obj.name} key={i} onClick={() => handleClickTab(obj)} />
          );
        })}
      </Tabs>
    </Box>
  );
};

export default ScrollabelTabs;
