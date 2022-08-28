import React, { useLayoutEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Header from "../organisms/Header";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { Circle } from "../../lib/types/tablesType";
import { ScrollTab } from "../../lib/types/componentsTypes";

const Default: React.FC = () => {
  const params = useParams();
  const uuid = params.uuid;
  const [scrollTabCircleArray, setScrollTabCircleArray] = React.useState<
    ScrollTab[]
  >([]);

  /**
   * nameとuuidのオブジェクトに成形して setScrollTabCircleArray に入れる
   * [
   *  {name: "サークル1", uuid: "a026055c-d09e-eb71-f84d-484a75803a3f"},
   *  {name: "サークル2", uuid: "b026055c-d09e-eb71-f84d-484a75803a3f"},
   * ]
   */
  const convertCircleArray = useCallback((circles: Circle[]) => {
    setScrollTabCircleArray(
      circles.map((circle) => ({
        name: circle.circles_name,
        uuid: circle.circles_uuid,
      }))
    );
  }, []);

  useLayoutEffect(() => {
    if (!uuid) return;
    axios.get("http://localhost:4001/circles").then((res) => {
      const circles = res.data;
      const scrollTabCircles: Circle[] = circles.concat();
      convertCircleArray(scrollTabCircles);
    });
  }, [uuid, convertCircleArray]);

  return (
    <>
      <Header scrollTabCircleArray={scrollTabCircleArray} />
      <Outlet />
    </>
  );
};

export default Default;
