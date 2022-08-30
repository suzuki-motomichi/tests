import PageTitle from "../atoms/PageTitle";
import Container from "@mui/material/Container";
import CircleEventCard from "../organisms/CircleEventCard";
import { Event } from "../../lib/types/tablesType";
import Box from "@mui/material/Box";

type Prop = {
  events: Event[];
};

const EventTemplate: React.FC<Prop> = ({ events }) => {
  const event = (events: Event[]) => {
    return events.map((event) => {
      return (
        <CircleEventCard
          key={event.id}
          id={event.id}
          events_title={event.events_title}
          events_time={event.events_time}
          events_place={event.events_place}
          events_people_limit_num={event.events_people_limit_num}
          events_note_text={event.events_note_text}
        />
      );
    });
  };

  return (
    <Container>
      <PageTitle title={"イベント一覧"} />
      <Box sx={eventStyle}>
        {events.length !== 0 ? event(events) : "イベントがありません"}
      </Box>
    </Container>
  );
};

const eventStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export default EventTemplate;
