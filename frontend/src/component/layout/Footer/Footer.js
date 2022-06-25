import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>VT&copy;</h1>
        <p>Quality Content is our first priority</p>

        <p>Copyrights 2022 &copy; Virat Tiwari </p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/virat0702">Instagram</a>
        <a href="https://www.youtube.com/channel/UCmBwzIzGItC40fysB0B_3Lw">
          Youtube
        </a>

        <a href="https://www.linkedin.com/in/virat-tiwari-361506214/">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
