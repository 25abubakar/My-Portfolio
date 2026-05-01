import React from "react";
import CompaniesCard from "./CompaniesCard";
import companiesData from '../../data/companiesData';

function Company(props) {
    const {name, imageName, location, position, workDesc, timePeriod} = companiesData[props.name];
    return (
        <CompaniesCard
            companyName={name}
            imageName={imageName}
            location={location}
            position={position}
            workDesc={workDesc}
            timePeriod={timePeriod}
        />
    )
}

export default Company;
