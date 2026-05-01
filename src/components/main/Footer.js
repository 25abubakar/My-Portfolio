import React from "react";

function Footer() {
    return (
        <footer id="main-footer">
            <div className="footer-name">
                © 2025 <span>Muhammad Abubakar</span>. All rights reserved.
            </div>
            <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                <a href="mailto:muhammadabubakarkhan1234@gmail.com" className="btn-resume">
                    <i className="fas fa-envelope" /> Email
                </a>
                <a href="https://github.com/25abubakar" target="_blank" rel="noopener noreferrer" className="btn-resume">
                    <i className="fab fa-github" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/muhammad-abubakar-795b45252/" target="_blank" rel="noopener noreferrer" className="btn-resume">
                    <i className="fab fa-linkedin" /> LinkedIn
                </a>
            </div>
        </footer>
    );
}

export default Footer;
