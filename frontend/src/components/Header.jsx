import { Navbar,Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            Bobyard
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
