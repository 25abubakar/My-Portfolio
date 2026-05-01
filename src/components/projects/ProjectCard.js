import React from "react";
const HtmlToReactParser = require('html-to-react').Parser;
const htmlToReactParser = new HtmlToReactParser();

// Tech color map for language badges
const TECH_COLORS = {
    'fas fa-server':       { label: 'C# / .NET Core',  color: '#6C63FF' },
    'fas fa-file-pdf':     { label: 'React · Flask · Python', color: '#00C896' },
    'fas fa-chart-line':   { label: 'TypeScript',       color: '#3178C6' },
    'fas fa-shopping-cart':{ label: 'C# / ASP.NET MVC', color: '#6C63FF' },
    'fas fa-school':       { label: 'HTML / CSS / JS',  color: '#FFD166' },
    'fas fa-university':   { label: 'C# / .NET',        color: '#6C63FF' },
    'fas fa-globe':        { label: 'React / SCSS',     color: '#61DAFB' },
};

function ProjectCard(props) {
    const iconKey = `${props.iconType} fa-${props.icon}`;
    const tech = TECH_COLORS[iconKey] || null;
    return (
        <div className="project-card">
            <div className="project-header">
                <div className="project-title">
                    <i className={`${props.iconType} fa-${props.icon}`} />
                    <a href={props.projectLink} target="_blank" rel="noopener noreferrer">
                        {props.heading}
                    </a>
                    {tech && (
                        <span style={{
                            fontSize: '0.7rem', fontWeight: 600, padding: '2px 8px',
                            borderRadius: '99px', background: `${tech.color}22`,
                            color: tech.color, border: `1px solid ${tech.color}44`,
                            marginLeft: '6px', whiteSpace: 'nowrap'
                        }}>
                            {tech.label}
                        </span>
                    )}
                </div>
                {props.repoLink && (
                    <div className="project-repo">
                        <a href={props.repoLink} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github" /> Repo
                        </a>
                    </div>
                )}
            </div>
            <div className="project-body">
                <ul>
                    {props.projectDesc.map((item, i) => (
                        <li key={i}>{htmlToReactParser.parse(item)}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProjectCard;
