import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://github.com/chethancr13.png" alt="Chethan R" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/chethancr13" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/chethancr13/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.behance.net/chethanr4" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faBehance} /></a>
          </div>
          <h1>Chethan R</h1>
          <p>Machine Learning Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/chethancr13" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/chethancr13/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.behance.net/chethanr4" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faBehance} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;