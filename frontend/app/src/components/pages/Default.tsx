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

  const circleArrayFunc = useCallback((circles: Circle[]) => {
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
      console.log({ circles });
      const scrollTabCircles: Circle[] = circles.concat();
      circleArrayFunc(scrollTabCircles);
    });
  }, [uuid, circleArrayFunc]);

  return (
    <>
      <Header scrollTabCircleArray={scrollTabCircleArray} />
      <Outlet />
    </>
  );
};

export default Default;
