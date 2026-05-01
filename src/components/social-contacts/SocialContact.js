import React from "react";

function SocialContact(props) {
    return (
        <div className="social-icon">
            <a href={props.url} target="_blank" rel="noopener noreferrer" aria-label={props.icon}>
                <i className={`fab fa-${props.icon}`} />
            </a>
        </div>
    );
}

export default SocialContact;
