import React from "react";
import Collapse from "react-bootstrap/Collapse";
import Project from '../projects/Project';

function Work(props) {
    return (
        <Collapse in={props.components.work}>
            <div id="work" className="section-wrap">
                <div className="section-header work-header">
                    <h2><i className="fas fa-folder-open mr-2" />My Work</h2>
                    <p className="mb-0">
                        Projects built with .NET Core, C#, TypeScript, React &amp; Python
                        &nbsp;·&nbsp;
                        <a
                            href="https://github.com/25abubakar"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color: '#1A1A2E', fontWeight: 700, textDecoration: 'underline'}}
                        >
                            github.com/25abubakar
                        </a>
                    </p>
                </div>
                <div className="section-body">

                    {/* Featured */}
                    <div className="subsection-label"><span role="img" aria-label="star">⭐</span> Featured — University Final Year Project</div>
                    <Project name="pdfassistant"/>

                    {/* .NET / C# */}
                    <div className="subsection-label">.NET / C# Projects</div>
                    <Project name="productapi"/>
                    <Project name="shopifystore"/>
                    <Project name="campusmanagement"/>
                    <Project name="schoolmanagement"/>

                    {/* Other */}
                    <div className="subsection-label">Other Projects</div>
                    <Project name="salesmanagement"/>
                    <Project name="patientform"/>
                    <Project name="quizapp"/>

                </div>
            </div>
        </Collapse>
    );
}

export default Work;
