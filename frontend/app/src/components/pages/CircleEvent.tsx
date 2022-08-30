import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import EventTemplate from "../templates/EventTemplate";
import { Event } from "../../lib/types/tablesType";

const CircleEvent: React.FC = () => {
  const [event, setEvent] = useState<Event[]>([]);

  useLayoutEffect(() => {
    axios.get("http://localhost:4001/events").then((res) => {
      const events = res.data;
      setEvent(events);
    });
  }, []);

  return (
    <>
      <EventTemplate events={event} />
    </>
  );
};

export default CircleEvent;
