import React from "react";
import '../assets/styles/Project.scss';

const certificateFiles = [
    {
        title: 'Full Stack Web Development Internship',
        file: '/certificates/cred/CT04DY1852 (3).pdf',
        badge: '📘',
    },
    {
        title: 'AWS Academy Graduate - Data Engineering',
        file: '/certificates/cred/AWS_Academy_Graduate___AWS_Academy_Data_Engineering_Badge20241216-27-z2uk3r.pdf',
        badge: '☁️',
    },
    {
        title: 'Building AI Agents using n8n Workshop',
        file: '/certificates/cred/n8n Participation Certificate - C Bhanu Prakash Reddy.pdf',
        badge: '🤖',
    },
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Featured Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/bunnyreddy986" target="_blank" rel="noreferrer"><h2>Library Management System</h2></a>
                <p>A Java-based application for managing books, student records, and issue/return operations efficiently.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bunnyreddy986" target="_blank" rel="noreferrer"><h2>Student Result Management System</h2></a>
                <p>A Java application that stores, calculates, and displays student marks and grades in a simple workflow.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bunnyreddy986" target="_blank" rel="noreferrer"><h2>Personal Portfolio Website</h2></a>
                <p>A responsive portfolio website showcasing my skills, projects, and contact information in a clean layout.</p>
            </div>
        </div>

        <div className="projects-grid" style={{ marginTop: '2rem' }}>
            <div className="project certificate-card">
                <h2>Certificates</h2>
                <p className="credential-note">Tap any card to view the credential directly.</p>
                <div className="certificate-list">
                    {certificateFiles.map((certificate) => (
                        <a
                            key={certificate.file}
                            href={certificate.file}
                            target="_blank"
                            rel="noreferrer"
                            className="certificate-link"
                        >
                            <span className="certificate-badge" aria-hidden="true">{certificate.badge}</span>
                            <span>
                                <strong>{certificate.title}</strong>
                                <span className="certificate-action">View credentials</span>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;