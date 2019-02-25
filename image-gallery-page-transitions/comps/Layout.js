import Header from "./Header";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

const Layout = props => (
  <Container>
    <Header />
    {props.children}
  </Container>
);

export default Layout;
