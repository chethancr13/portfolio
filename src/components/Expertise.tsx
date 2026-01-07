import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Scikit-learn",
    "NumPy",
    "TensorFlow"
];

const labelsSecond = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js"
];

const labelsThird = [
    "Deep Learning",
    "NLP",
    "Docker",
    "Neural Networks"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning Developer</h3>
                    <p>I design, build, and deploy scalable machine learning models that solve real-world problems. Skilled in Deep Learning, Natural Language Processing (NLP), and various ML frameworks to create intelligent solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Web Development</h3>
                    <p>I build modern, responsive web applications using cutting-edge technologies. From frontend interfaces to backend APIs, I create full-stack solutions that deliver exceptional user experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Deep Learning &amp; NLP</h3>
                    <p>I design and deploy deep learning models and neural network architectures, and build NLP systems. Experienced in model optimization, training at scale, and containerized deployments using Docker.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;