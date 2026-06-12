import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Featured Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/bunnyreddy986" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bunnyreddy986" target="_blank" rel="noreferrer"><h2>Library Management System</h2></a>
                <p>A Java-based application for managing books, student records, and issue/return operations efficiently.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bunnyreddy986" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bunnyreddy986" target="_blank" rel="noreferrer"><h2>Student Result Management System</h2></a>
                <p>A Java application that stores, calculates, and displays student marks and grades in a simple workflow.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bunnyreddy986" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bunnyreddy986" target="_blank" rel="noreferrer"><h2>Personal Portfolio Website</h2></a>
                <p>A responsive portfolio website showcasing my skills, projects, and contact information in a clean layout.</p>
            </div>
        </div>

        <div className="projects-grid" style={{ marginTop: '2rem' }}>
            <div className="project">
                <h2>Certificates</h2>
                <p><strong>Full Stack Web Development Internship</strong> — CodTech IT Solutions</p>
                <p><strong>AWS Academy Graduate - Data Engineering</strong></p>
                <p><strong>Building AI Agents using n8n Workshop</strong> — Capabl</p>
            </div>
        </div>
    </div>
    );
}

export default Project;