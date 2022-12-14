import { useParams } from "react-router-dom";
import LinkCard from "../molecules/LinkCard";
import Box from "@mui/material/Box";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import IconText from "../molecules/IconText";
import PlaceIcon from "@mui/icons-material/Place";
import PersonIcon from "@mui/icons-material/Person";
import ClampText from "../atoms/ClampText";

type Prop = {
  id: number;
  events_title: string;
  events_time: string;
  events_place: string;
  events_people_limit_num: number;
  events_note_text: string;
};

const CircleEventCard: React.FC<Prop> = ({
  id,
  events_title,
  events_time,
  events_place,
  events_people_limit_num,
  events_note_text,
}) => {
  const params = useParams();
  const uuid = params.uuid;

  return (
    <>
      <LinkCard link={`/circle/${uuid}/event/${id}`}>
        <Box sx={circleEventCardStyle}>
          <Box sx={{ fontWeight: "bold" }}>{events_title}</Box>

          <Box sx={{ fontSize: 10 }}>
            <IconText
              icon={<CalendarMonthIcon fontSize={"small"} />}
              text={events_time}
            />
            <IconText
              icon={<PlaceIcon fontSize={"small"} />}
              text={events_place}
            />
            <IconText
              icon={<PersonIcon fontSize={"small"} />}
              text={events_people_limit_num.toString()}
            />
          </Box>

          <Box>
            <ClampText text={events_note_text} lineClamp={2} />
          </Box>
        </Box>
      </LinkCard>
    </>
  );
};

const circleEventCardStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 1.5,
};

export default CircleEventCard;
