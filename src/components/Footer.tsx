import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/chethancr13" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/chethancr13/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://www.behance.net/chethanr4" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faBehance} /></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/chethancr13" target="_blank" rel="noreferrer">Chethan R</a> with 💜</p>
    </footer>
  );
}

export default Footer;