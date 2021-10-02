import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

import bitmoji from "../../Assets/bitmoji.png"

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={bitmoji}
            alt="man-svgrepo"
          />
          <div className="AboutBio">

            Solutions Architect for Techmates Group, a Hybris & Adobe focused consulting company. I work on creating and implementing creative solutions for Enterprise level projects on the Hybris e-commerce platform. This includes enterprise applications for companies like EMC, ALDO, Keurig, and Whirlpool. On a personal level, I have a deep-seated passion for programming which motivates me to start new side projects all the time, learn new things everyday and keep up with the latest technologies.
          </div>
          <div className="AboutBio tagline2">
             Fluent in the below technologies:
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
