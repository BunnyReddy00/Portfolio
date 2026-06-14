import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/BunnyReddy00" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/bunnyreddy986" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://www.instagram.com/bunnyy._.x_" target="_blank" rel="noreferrer"><InstagramIcon/></a>
        <a href="https://discord.com/users/btwy_im_bunny" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord} /></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/BunnyReddy00" target="_blank" rel="noreferrer">C Bhanu Prakash Reddy</a> with 💜</p>
    </footer>
  );
}

export default Footer;