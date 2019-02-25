import Layout from "../comps/Layout.js";
import Link from "next/link";
import styled from "styled-components";
// import camera from "./camera.jpg";
// updated

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // color: #fcfffc;
  height: 95vh;
  width: 95vw;
`;

const ImageReel = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`;

const Image = styled.img`
  height: 9rem;
  width: 9rem;
  margin: 1.4rem;
`;

const Index = () => (
  <Layout>
    <Container>
      <ImageReel>
        <div className="image-one">
          <Link href="/product-display">
            <a>
              <Image
                id="image-one"
                className="product-listing-image"
                src="/static/camera.jpg"
              />
            </a>
          </Link>
        </div>
        <div className="image-two">
          <Link href="/product-display">
            <a>
              <Image
                id="image-two"
                className="product-listing-image"
                src="/static/camera.jpg"
              />
            </a>
          </Link>
        </div>
        <div className="image-three">
          <Link href="/product-display">
            <a>
              <Image
                className="product-listing-image"
                src="/static/camera.jpg"
              />
            </a>
          </Link>
        </div>
        <div className="image-four">
          <Link href="/product-display">
            <a>
              <Image
                className="product-listing-image"
                src="/static/camera.jpg"
              />
            </a>
          </Link>
        </div>
        <div className="image-five">
          <Link href="/product-display">
            <a>
              <Image
                className="product-listing-image"
                src="/static/camera.jpg"
              />
            </a>
          </Link>
        </div>
        <div className="image-six">
          <Link href="/product-display">
            <a>
              <Image
                className="product-listing-image"
                src="/static/camera.jpg"
              />
            </a>
          </Link>
        </div>
        <div className="image-seven">
          <Link href="/product-display">
            <a>
              <Image
                className="product-listing-image"
                src="/static/camera.jpg"
              />
            </a>
          </Link>
        </div>
        <div className="image-eight">
          <Link href="/product-display">
            <a>
              <Image
                className="product-listing-image"
                src="/static/camera.jpg"
              />
            </a>
          </Link>
        </div>
        <div className="image-nine">
          <Link href="/product-display">
            <a>
              <Image
                className="product-listing-image"
                src="/static/camera.jpg"
              />
            </a>
          </Link>
        </div>
      </ImageReel>
    </Container>
  </Layout>
);

export default Index;
