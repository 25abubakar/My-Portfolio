import React from "react";

function NavCell(props) {
    return (
        <div
            className={`port-item ${props.navClass} ${props.component ? 'active' : ''}`}
            onClick={() => props.handleComponentClick(props.clickComponent)}
            aria-controls={props.clickComponent}
            aria-expanded={props.component}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && props.handleComponentClick(props.clickComponent)}
        >
            <i className={`fas fa-${props.icon}`} />
            <span className="d-none d-sm-block">{props.nameText}</span>
        </div>
    );
}

export default NavCell;
