import Navbar from "../../components/navbar/Navbar";
import HeroSection from "../../components/Hero/HeroSection";
import Services from "../../components/Services/Services";
import Banner from "../../components/vip-banner/Banner";
import { useState } from "react";

export function Home({ match }) {
  console.log(match);
  const url = match.url;
  console.log(url);
  const [active, setActive] = useState(false);

  return (
    <div
      className='Home'
      style={{
        height: active ? "100vh" : "",
        overflow: active ? "hidden" : "",
      }}>
      <Navbar active={active} setActive={setActive} url={url} />
      <HeroSection />
      <Services />
      <Banner />
    </div>
  );
}
