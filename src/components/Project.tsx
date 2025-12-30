import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.linkedin.com/in/chethancr13/details/projects/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="Intrusion Network Detection" width="100%"/></a>
                <a href="https://www.linkedin.com/in/chethancr13/details/projects/" target="_blank" rel="noreferrer"><h2>Intrusion Network Detection (IDS)</h2></a>
                <p>Developed an Intrusion Detection System (IDS) using machine learning algorithms to identify and prevent network security threats. Implemented real-time monitoring and anomaly detection capabilities to protect network infrastructure from malicious activities.</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/in/chethancr13/details/projects/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="iStocks AI/ML Stock Prediction" width="100%"/></a>
                <a href="https://www.linkedin.com/in/chethancr13/details/projects/" target="_blank" rel="noreferrer"><h2>iStocks - AI/ML Stock Prediction System</h2></a>
                <p>Built an intelligent stock market prediction and management system using AI/ML techniques. Leverages machine learning models to analyze market trends, predict stock prices, and provide data-driven investment insights for better portfolio management.</p>
            </div>
            <div className="project">
                <a href="https://www.behance.net/chethanr4" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="Nike Online Store" width="100%"/></a>
                <a href="https://www.behance.net/chethanr4" target="_blank" rel="noreferrer"><h2>Nike Online Store</h2></a>
                <p>A modern e-commerce UI/UX design for Nike's online store. Created clean, functional, and user-centered digital experiences with intuitive navigation and engaging visual design using Figma and Adobe Photoshop.</p>
            </div>
            <div className="project">
                <a href="https://github.com/chethancr13/Lane-Traking-Project" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="Lane Tracking Project" width="100%"/></a>
                <a href="https://github.com/chethancr13/Lane-Traking-Project" target="_blank" rel="noreferrer"><h2>Lane Tracking Project</h2></a>
                <p>Developed a computer vision project for autonomous lane detection and tracking using Python, OpenCV, and machine learning techniques. Implements real-time lane detection algorithms for autonomous vehicle applications.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;