import React, { useLayoutEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

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
  url: string;
  index: number;
  array: Obj[];
};

const ScrollabelTabs: React.FC<Prop> = ({ url, index, array }) => {
  const [value, setValue] = React.useState(index);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    setValue(index);
  }, [index]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
        {array.map((array) => {
          if (array.id) {
            return (
              <Tab
                label={array.name}
                key={array.id}
                onClick={() => navigate(url + array.id)}
              />
            );
          } else {
            return (
              <Tab
                label={array.name}
                key={array.uuid}
                onClick={() => navigate(url + array.uuid)}
              />
            );
          }
        })}
      </Tabs>
    </Box>
  );
};

export default ScrollabelTabs;
