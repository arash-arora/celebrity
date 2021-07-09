import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesContent,
  ServicesH2,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  //   ServicesBg,
  //   VideoBg,
} from "./ServicesElements";
// import Video from "../../videos/video2.mp4";
import { Link } from "react-router-dom";
import data from "./ServicesData";

const Services = () => {
  return (
    <ServicesContainer id='services'>
      {/* <ServicesBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </ServicesBg> */}
      <ServicesContent>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          {data.map((data) => {
            return (
              <Link
                to={data.link}
                style={{ textDecoration: "none", color: "#222" }}>
                <ServicesCard>
                  <ServicesIcon src={data.icon} />
                  <ServicesH2>{data.heading}</ServicesH2>
                  <ServicesP>{data.description}</ServicesP>
                </ServicesCard>
              </Link>
            );
          })}
        </ServicesWrapper>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services;
