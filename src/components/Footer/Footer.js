import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection className={"footer"}>
      <div className="Container">

      </div>
    </FooterSection>
  );
}

export default Footer;
