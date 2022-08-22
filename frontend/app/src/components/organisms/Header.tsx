import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { theme } from "../../style/theme";
import BottomDrawerMenu from "./BottomDrawerMenu";

const Header: React.FC = () => {
  const [isShow, setIsShow] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">LOGO</Link>
          </Typography>
          <Button color="inherit">
            <Link to="/sign-up">新規登録</Link>
          </Button>
          <Button color="inherit">
            <Link to="/login">ログイン</Link>
          </Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
            onClick={() => setIsShow(true)}
          >
            <MenuIcon />
          </IconButton>
          <BottomDrawerMenu
            handleClickButton={() => setIsShow(false)}
            isShow={isShow}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
