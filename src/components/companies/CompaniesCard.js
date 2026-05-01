import React from "react";

function CompaniesCard(props) {
    return (
        <div className="company-card">
            <div className="company-header">
                <div className="company-left">
                    <div className="company-icon">
                        <i className="fas fa-building" />
                    </div>
                    <div>
                        <div className="company-name">{props.companyName}</div>
                        <div className="company-role">{props.position}</div>
                    </div>
                </div>
                <div className="company-location d-none d-md-block">
                    <i className="fas fa-map-marker-alt" />{props.location}
                </div>
            </div>
            <div className="company-body">
                <ul>
                    {props.workDesc.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="company-footer">
                <i className="fas fa-calendar-alt" />{props.timePeriod}
            </div>
        </div>
    );
}

export default CompaniesCard;
