import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "PostgreSQL",
    "MySQL",
    "Snowflake",
    "BigQuery"
];

const labelsSecond = [
    "Python",
    "SQL",
    "PySpark",
    "Pandas",
    "Airflow"
];

const labelsThird = [
    "Kafka",
    "Flink",
    "Spark Streaming",
    "Debezium",
    "Docker"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Engineering</h3>
                    <p>I design, build, and maintain scalable data pipelines and systems for reliable data processing, storage, and analytics. Experienced in ETL, data modeling, batch and streaming architectures, and database optimization.</p>
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
                    <h3>Streaming &amp; Orchestration</h3>
                    <p>I design and operate streaming data platforms and orchestration workflows. Experienced with Kafka, Flink, Spark Streaming, and Airflow to build reliable real-time and scheduled pipelines.</p>
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