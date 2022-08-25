import React, { useLayoutEffect } from "react";
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

type CircleArray = {
  uuid: string;
  name: string;
};

const Header: React.FC = () => {
  const [isShow, setIsShow] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const params = useParams();
  const uuid = params.uuid;
  const navigate = useNavigate();

  const circleArrayIndex = () => {
    // TODO: uuidが違う場合indexは-1になる。404ページへ。
    return circleArray.findIndex((circle) => circle.uuid === uuid);
  };

  useLayoutEffect(() => {
    if (!uuid) return;
    const index = circleArrayIndex();
    setValue(index);
  }, [setValue, circleArrayIndex]);

  const selectCircle = () => {
    return (
      <ScrollabelTabs
        index={value}
        array={circleArray}
        handleClickTab={(array: CircleArray) =>
          navigate("/circle/" + array.uuid)
        }
      />
    );
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
