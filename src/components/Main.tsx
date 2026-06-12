import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/bunnyreddy986" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/bunnyreddy986" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/bunnyy._.x_" target="_blank" rel="noreferrer"><InstagramIcon/></a>
            <a href="https://discord.com/users/btwy_im_bunny" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord} /></a>
          </div>
          <h1>C BHANU PRAKASH REDDY</h1>
          <p>Aspiring Java Developer | B.Tech CSE Student</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/bunnyreddy986" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/bunnyreddy986" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/bunnyy._.x_" target="_blank" rel="noreferrer"><InstagramIcon/></a>
            <a href="https://discord.com/users/btwy_im_bunny" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;