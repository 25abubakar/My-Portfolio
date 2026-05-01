import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from '../../data/projectData';

function Project(props) {
    const {heading, mainIcon, projectLink, repoLink, projectDesc, icon, iconType} = projectData[props.name];
    return (
        <ProjectCard
            heading={heading}
            mainIcon={mainIcon}
            projectLink={projectLink}
            repoLink={repoLink}
            projectDesc={projectDesc}
            icon={icon}
            iconType={iconType}
        />
    )
}

export default Project;
