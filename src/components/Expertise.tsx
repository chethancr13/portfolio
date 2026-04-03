import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "SQL",
    "Data Modeling",
    "Star Schema",
    "SCD Type 2"
];

const labelsSecond = [
    "dbt",
    "Python",
    "Airflow",
    "Incremental Loads",
    "Data Quality"
];

const labelsThird = [
    "Azure",
    "Databricks",
    "Azure Data Factory",
    "Apache Spark",
    "Delta Lake"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Modeling &amp; Warehousing</h3>
                    <p>I model analytics-ready datasets with dimensional modeling, SCD strategies, and query-optimized schemas. Focused on reliability, lineage, and performance for BI and downstream consumers.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>ELT, dbt &amp; Orchestration</h3>
                    <p>I build maintainable transformation layers with dbt (tests, documentation, and lineage) and orchestrate dependable pipelines with Airflow. I care about clean contracts, incremental patterns, and production-ready monitoring.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Azure &amp; Spark Platform</h3>
                    <p>I work on lakehouse-style architectures using Spark for scalable processing, and Azure services for integration and deployment. Comfortable building batch pipelines and modeling curated layers for analytics.</p>
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