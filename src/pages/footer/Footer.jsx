import React from "react";
import { images } from "../../contants";
import { TbBrandInstagram } from "react-icons/tb";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import "./footer.css";

const socials = [
  {
    icon: <TiSocialFacebook />,
    url: "https://www.facebook.com/raymondkingjnr",
  },
  {
    icon: <TbBrandInstagram />,
    url: "https://www.instagram.com/raymondking.i.o",
  },
  {
    icon: <TiSocialTwitter />,
    url: "https://www.twitter.com/ArihamSK",
  },
];

function Footer() {
  return (
    <footer className="footer-sec">
      <img src={images.logo} alt="" />
      <p>@ {new Date().getFullYear()} Raymond's design</p>
      <ul>
        {socials.map((item, index) => {
          const { icon, url } = item;
          return (
            <li key={index} className="socials-icon">
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;
