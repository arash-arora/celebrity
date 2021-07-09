import React, { useState } from "react";
import Video1 from "../../assets/Videos/FunFair.mp4";
import Video2 from "../../assets/Videos/dance.mp4";
import Video3 from "../../assets/Videos/acting.mp4";
import Video4 from "../../assets/Videos/sailor.mp4";
import Photo1 from "../../assets/Photos/photo1.jpg";
import { Button } from "../Button/Button";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  List,
  ListItem,
  Thumbnail,
  // ArrowForward,
  // ArrowRight,
} from "./HeroSectionElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [video, setVideo] = useState(Video4);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Lorem, ipsum.</HeroH1>
        <HeroP>Lorem ipsum dolor sit.</HeroP>
        <HeroBtnWrapper>
          <Button
            to='about'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'>
            Know More
            {/* {hover ? <ArrowForward /> : <ArrowRight />} */}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
      <List>
        <ListItem
          onClick={() => {
            setVideo(Video4);
          }}>
          <Thumbnail src='https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
        </ListItem>
        <ListItem
          onClick={() => {
            setVideo(Video2);
          }}>
          <Thumbnail src='https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
        </ListItem>
        <ListItem
          onClick={() => {
            setVideo(Video3);
          }}>
          <Thumbnail src='https://images.pexels.com/photos/392748/pexels-photo-392748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
        </ListItem>
        <ListItem
          onClick={() => {
            setVideo(Video1);
          }}>
          <Thumbnail src={Photo1} />
        </ListItem>
      </List>
    </HeroContainer>
  );
};

export default HeroSection;
