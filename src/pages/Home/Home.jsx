import { Outlet } from "react-router-dom";

// Components
import { Container, Footer, Header } from "../../components/index";

const Home = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Home;
