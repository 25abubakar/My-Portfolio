import React from "react";
import Collapse from "react-bootstrap/Collapse";
import Company from "../companies/Company";
import CertificatesSection from "../certifications/CertificatesSection";

function Resume(props) {
    return (
        <Collapse in={props.components.resume}>
            <div id="resume" className="section-wrap">
                <div className="section-header resume-header text-white">
                    <div className="d-flex align-items-center justify-content-between flex-wrap" style={{gap: '12px'}}>
                        <div>
                            <h2 className="mb-1"><i className="fas fa-graduation-cap mr-2" />Resume</h2>
                            <p className="mb-0">.NET Full Stack Developer · Islamabad, Pakistan</p>
                        </div>
                        <a
                            href="https://github.com/25abubakar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-dl-resume"
                        >
                            <i className="fab fa-github" /> github.com/25abubakar
                        </a>
                    </div>
                </div>
                <div className="section-body">

                    {/* Work Experience */}
                    <div className="subsection-label">Work Experience</div>
                    <Company name="laltechnology"/>
                    <Company name="proximo"/>

                    {/* Education */}
                    <div className="subsection-label">Education</div>

                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-left">
                                <div>
                                    <div className="company-name">Bachelor in Computer Science</div>
                                    <div className="company-role">
                                        <a href="https://dikhan.qurtuba.edu.pk/" target="_blank" rel="noopener noreferrer"
                                           style={{color: '#6C63FF', textDecoration: 'none'}}>
                                            Qurtuba University of Science &amp; IT
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="company-location d-none d-md-block">
                                <i className="fas fa-map-marker-alt" /> Dera Ismail Khan, Pakistan
                            </div>
                        </div>
                        <div className="company-body">
                            <ul>
                                <li>CGPA: <strong style={{color: '#00C896'}}>3.34 / 4.0</strong></li>
                                <li>Focused on software engineering, web development, databases, and cloud computing.</li>
                            </ul>
                        </div>
                        <div className="company-footer">
                            <i className="fas fa-calendar-alt" /> 11/2021 – 11/2025
                        </div>
                    </div>

                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-left">
                                <div>
                                    <div className="company-name">HSSC – Pre Engineering</div>
                                    <div className="company-role">The Knowledge Home School &amp; College DIKhan</div>
                                </div>
                            </div>
                            <div className="company-location d-none d-md-block">
                                <i className="fas fa-map-marker-alt" /> Dera Ismail Khan, Pakistan
                            </div>
                        </div>
                        <div className="company-footer">
                            <i className="fas fa-calendar-alt" /> 2019 – 2021
                        </div>
                    </div>

                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-left">
                                <div>
                                    <div className="company-name">Matric</div>
                                    <div className="company-role">Imran Public School</div>
                                </div>
                            </div>
                            <div className="company-location d-none d-md-block">
                                <i className="fas fa-map-marker-alt" /> Dera Ismail Khan, Pakistan
                            </div>
                        </div>
                        <div className="company-footer">
                            <i className="fas fa-calendar-alt" /> 2017 – 2019
                        </div>
                    </div>

                    {/* Certificates */}
                    <div className="subsection-label">Certifications</div>
                    <CertificatesSection />

                </div>
            </div>
        </Collapse>
    );
}

export default Resume;
