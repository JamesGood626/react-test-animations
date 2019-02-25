import Link from "next/link";
import styled from "styled-components";

const linkStyle = {
  marginLeft: "1rem",
  marginTop: "1rem",
  color: "#fcfffc",
  textDecoration: "none",
  fontSize: "2rem"
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    {/* <Link href="/product-display">
      <a style={linkStyle}>Product Display</a>
    </Link> */}
  </div>
);

export default Header;
