import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import imgScrollDown from "../../Assets/scroll-down.svg";
import thomas from "../../Assets/thomas.png";

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Thomas</h1>
            <h5>Solutions Architect</h5>
            <p>
              I strategize, design, and implement creative solutions. <br/>I love what I do.
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src={thomas}
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects" className={"scroll-down"}>
          <ScrollLink className="scroll-down">
            Scroll down
            <img
              src={imgScrollDown}
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
