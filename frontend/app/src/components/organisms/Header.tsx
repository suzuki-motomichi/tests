import React, { useLayoutEffect, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { theme } from "../../style/theme";
import ScrollabelTabs from "../molecules/ScrollabelTabs";
import BottomDrawerMenu from "./BottomDrawerMenu";
import { ScrollTab } from "../../lib/types/componentsTypes";

type Prop = {
  scrollTabCircleArray: ScrollTab[];
};

const Header: React.FC<Prop> = ({ scrollTabCircleArray }) => {
  const [isShow, setIsShow] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const params = useParams();
  const uuid = params.uuid;
  const navigate = useNavigate();

  const circleArrayIndex = useCallback(() => {
    // TODO: uuidが違う場合indexは-1になる。404ページへ。
    return scrollTabCircleArray.findIndex((circle) => circle.uuid === uuid);
  }, [uuid, scrollTabCircleArray]);

  useLayoutEffect(() => {
    if (scrollTabCircleArray.length === 0) return;
    const index = circleArrayIndex();
    setValue(index);
  }, [uuid, circleArrayIndex, scrollTabCircleArray]);

  const selectCircle = () => {
    return (
      <ScrollabelTabs
        index={value}
        array={scrollTabCircleArray}
        handleClickTab={(obj: ScrollTab) => navigate("/circle/" + obj.uuid)}
      />
    );
  };

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
        {uuid ? selectCircle() : ""}
      </AppBar>
    </Box>
  );
};

export default Header;
