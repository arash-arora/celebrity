import React from "react";
import { Link } from "react-router-dom";

function LinkList() {
  // console.log(url);
  return (
    <ul>
      <li>
        <Link to='/about' style={{ "--i": "0.05s" }}>
          About Us
        </Link>
      </li>
      <li>
        <Link to='/' style={{ "--i": "0.15s" }}>
          Our Services
        </Link>
      </li>
      <li>
        <Link href='/' style={{ "--i": "0.25s" }}>
          Events & Media
        </Link>
      </li>
      <li>
        <Link href='/' style={{ "--i": "0.35s" }}>
          Register With us
        </Link>
      </li>
      <li>
        <Link href='/' style={{ "--i": "0.45s" }}>
          Testimonials
        </Link>
      </li>
      <li>
        <Link href='/' style={{ "--i": "0.55s" }}>
          Contact Us
        </Link>
      </li>
    </ul>
  );
}

export default LinkList;
