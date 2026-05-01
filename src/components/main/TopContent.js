import React from "react";
import Social from '../social-contacts/Social';
import NavCell from '../nav-cell/NavCell';
import profilePhoto from '../../img/abubakar.jpeg';

function TopContent(props) {
    return (
        <div id="main-header">
            <div className="d-flex flex-column flex-md-row">

                {/* Photo */}
                <div className="hero-photo-wrap">
                    <div className="hero-photo-ring">
                        <img src={profilePhoto} alt="Muhammad Abubakar" className="hero-photo" />
                    </div>
                    <div className="hero-status-dot" title="Available for work" />
                </div>

                {/* Info */}
                <div className="flex-grow-1 d-flex flex-column justify-content-between">
                    <div className="hero-info">
                        <div className="hero-badge">
                            <i className="fas fa-circle" style={{color:'#00C896', fontSize:'0.5rem', marginRight:'6px'}}/>
                            Available for opportunities
                        </div>
                        <h1 className="hero-name">Muhammad Abubakar</h1>
                        <div className="hero-title">
                            <span className="title-dot" />.NET Full Stack Developer
                        </div>
                        <div className="hero-meta">
                            <span className="hero-meta-item">
                                <i className="fas fa-map-marker-alt"/>
                                Islamabad, Pakistan
                            </span>
                            <span className="hero-meta-item">
                                <i className="fas fa-phone"/>
                                <a href="tel:+923200030321">(+92) 3200030321</a>
                            </span>
                            <span className="hero-meta-item">
                                <i className="fas fa-envelope"/>
                                <a href="mailto:muhammadabubakarkhan1234@gmail.com">muhammadabubakarkhan1234@gmail.com</a>
                            </span>
                        </div>
                        <div className="hero-edu">
                            <i className="fas fa-university"/>
                            BS Computer Science &nbsp;·&nbsp; Qurtuba University &nbsp;·&nbsp;
                            <span style={{color:'#00C896'}}>CGPA 3.3</span>
                        </div>
                    </div>

                    <div className="hero-socials">
                        <Social name="linkedin"/>
                        <Social name="github"/>
                        <Social name="hackerrank"/>
                        <Social name="medium"/>
                        <Social name="facebook"/>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <div className="port-nav">
                <NavCell navClass="nav-home"    clickComponent="home"    handleComponentClick={props.handleComponentClick} component={props.components.home}    icon="home"           nameText="Home"    />
                <NavCell navClass="nav-resume"  clickComponent="resume"  handleComponentClick={props.handleComponentClick} component={props.components.resume}  icon="graduation-cap" nameText="Resume"  />
                <NavCell navClass="nav-work"    clickComponent="work"    handleComponentClick={props.handleComponentClick} component={props.components.work}    icon="folder-open"    nameText="Work"    />
                <NavCell navClass="nav-contact" clickComponent="contact" handleComponentClick={props.handleComponentClick} component={props.components.contact} icon="envelope"       nameText="Contact" />
            </div>
        </div>
    );
}

export default TopContent;
