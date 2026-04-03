import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.linkedin.com/in/chethancr13/details/projects/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="E-Commerce Sales Data Warehouse & Analytics Pipeline" width="100%"/></a>
                <a href="https://www.linkedin.com/in/chethancr13/details/projects/" target="_blank" rel="noreferrer"><h2>E-Commerce Sales Data Warehouse &amp; Analytics Pipeline</h2></a>
                <p>Designed a star schema (5 dimensions, 2 facts) and implemented incremental loads with SCD Type 2 for historical tracking. Built 12+ Airflow DAGs for automated ETL and reduced query time by ~65% via indexing and partitioning strategies.</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/in/chethancr13/details/projects/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="Data Lakehouse on Cloud (Medallion Architecture)" width="100%"/></a>
                <a href="https://www.linkedin.com/in/chethancr13/details/projects/" target="_blank" rel="noreferrer"><h2>Data Lakehouse on Cloud (Medallion Architecture)</h2></a>
                <p>Built Bronze/Silver/Gold layers with PySpark (deduplication, schema enforcement, SCD Type 2) and dbt models with tests, docs, and lineage. Orchestrated batch pipelines with Airflow (retries + alerts) and enforced data quality checks and contracts.</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/in/chethancr13/details/projects/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="More projects on LinkedIn" width="100%"/></a>
                <a href="https://www.linkedin.com/in/chethancr13/details/projects/" target="_blank" rel="noreferrer"><h2>More Projects</h2></a>
                <p>More end-to-end data engineering work (pipelines, modeling, and analytics) is available on my LinkedIn projects section.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;