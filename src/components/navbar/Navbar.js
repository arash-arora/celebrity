import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LinkList from "./LinkList";

function Navbar({ active, setActive }) {
  // console.log(props);
  //   const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
  }
  return (
    <div
      className={`container ${active ? "active" : ""}`}
      style={{ minHeight: active ? "100vh" : "0" }}>
      <div className='navbar'>
        <div className='menu'>
          <Link to='/' style={{ textDecoration: "none", color: "#222" }}>
            <h2 className='logo'>Lorem</h2>
          </Link>
          <div className='hamburger-menu' onClick={handleClick}>
            {/* <span> Close</span> */}
            <div className='bar'></div>
          </div>
        </div>
      </div>
      <div className='site-header-overlay'>
        <div className='overlay-bg'></div>
        <div className='overlay-wrapper'>
          <div className='menufull'>
            <div className='menu-1stcol'>
              <div className='menu-links'>
                <LinkList />
              </div>
            </div>
            <div className='menu-2ndcol'>
              <div className='menufull-media'>
                <img
                  src='https://i.pinimg.com/originals/41/6a/7f/416a7fd4720a3c0dbd38c17f3ac8e0c1.jpg'
                  alt='bg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
