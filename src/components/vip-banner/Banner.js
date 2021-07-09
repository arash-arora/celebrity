import React, { useState } from "react";
import "./Banner.css";
import { Button } from "../Button/Button";

const Banner = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div id='bg'>
      <div className='content'>
        <div className='heading'>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </div>
        <div className='btn'>
          {/* <button>Know More</button> */}
          <Button
            to='about'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'>
            Know More
            {/* {hover ? <ArrowForward /> : <ArrowRight />} */}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
