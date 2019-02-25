import Layout from "../comps/Layout.js";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // color: #fcfffc;
  height: 95vh;
  width: 95vw;
`;

const Image = styled.img`
  height: 9rem;
  width: 9rem;
  margin: 1.4rem;
`;

const ProductDisplay = () => (
  <Layout>
    <Container>
      <div className="product-display-image">
        <Image src="/static/camera.jpg" />
      </div>
    </Container>
  </Layout>
);

export default ProductDisplay;
