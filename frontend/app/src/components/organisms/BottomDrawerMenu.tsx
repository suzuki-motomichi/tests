import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

type Prop = {
  isShow: boolean;
  handleClickButton: (
    value: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const BottomDrawerMenu: React.FC<Prop> = ({ isShow, handleClickButton }) => {
  const closeDrawer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    handleClickButton(e);
  };

  const list = () => (
    <Box sx={listStyle}>
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/#">
            <ListItemText primary={"お問合せ"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/#">
            <ListItemText primary={"お知らせ"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/#">
            <ListItemText primary={"お支払い"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/#">
            <ListItemText primary={"よくある質問"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/#">
            <ListItemText primary={"ログアウト"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer anchor={"bottom"} open={isShow} onClose={closeDrawer}>
      <Box sx={closeIconStyle}>
        <IconButton onClick={closeDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>
      {list()}
    </Drawer>
  );
};

const listStyle = {
  width: "auto",
  pb: 4,
};

const closeIconStyle = {
  display: "flex",
  justifyContent: "flex-end",
  m: 1,
};

export default BottomDrawerMenu;
