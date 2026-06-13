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
    const featured = [
        {
            title: 'Library Management System',
            desc: 'Java application for managing books, students and circulation flows.',
            tech: ['Java', 'JDBC', 'MySQL'],
            repo: 'https://github.com/bunnyreddy986'
        },
        {
            title: 'Student Result Management System',
            desc: 'Stores and computes student marks and generates reports.',
            tech: ['Java', 'OOP', 'File I/O'],
            repo: 'https://github.com/bunnyreddy986'
        },
        {
            title: 'Personal Portfolio Website',
            desc: 'This portfolio (React) showcasing projects, contact, and timeline.',
            tech: ['React', 'Sass', 'Responsive'],
            repo: 'https://github.com/bunnyreddy986'
        }
    ];

    return (
        <section className="projects-container" id="projects">
            <div className="projects-header">
                <h1>Featured Projects</h1>
                <p className="sub">Selected works that demonstrate practical skills and outcomes.</p>
            </div>

            <div className="projects-grid">
                {featured.map(p => (
                    <article key={p.title} className="project-card">
                        <div className="project-body">
                            <h3><a href={p.repo} target="_blank" rel="noreferrer">{p.title}</a></h3>
                            <p className="lead">{p.desc}</p>
                            <div className="tech">
                                {p.tech.map(t => <span key={t} className="tech-chip">{t}</span>)}
                            </div>
                        </div>
                        <div className="project-actions">
                            <a className="link" href={p.repo} target="_blank" rel="noreferrer">View Repo</a>
                        </div>
                    </article>
                ))}
            </div>

            <div className="certificates" style={{ marginTop: '2.5rem' }}>
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
        </section>
    );
}

export default Project;