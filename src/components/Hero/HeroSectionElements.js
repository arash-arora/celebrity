import styled from "styled-components";
// import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  backgroud: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 700px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 660px) {
    margin-bottom: 250px;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// export const ArrowForward = styled(MdArrowForward)`
//   margin-left: 8px;
//   font-size: 20px;
// `;

// export const ArrowRight = styled(MdKeyboardArrowRight)`
//   margin-left: 8px;
//   font-size: 20px;
// `;

export const List = styled.ul`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  ${
    "" /* display: flex;
  justify-content: center;
  align-items: center; */
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 12px;

  @media screen and (max-width: 660px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
  margin: 0 10px;
  border-radius: 4px;
  backgroud: #fff;
  padding: 3px 3px 0;
  opacity: 0.7;
  transition: 0.5s;

  &:hover {
    opacity: 1;
  }
`;

export const Thumbnail = styled.img`
  width: 120px;
  height: 120px;
  transition: 0.5s;

  &:hover {
    width: 200px;
    @media screen and (max-width: 568px) {
      width: 150px;
    }
  }
`;
