import { Container } from "@mui/system";
import CircleRequest from "../organisms/CircleRequest";
import CircleTop from "../organisms/CircleTop";

const CircleTemplate: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <CircleTop />
      <CircleRequest />
    </Container>
  );
};

export default CircleTemplate;
