import React from "react";
import SocialContact from "./SocialContact";
import socialMediaData from '../../data/socialMediaData';

function Social(props) {
    const {url, icon} = socialMediaData[props.name];
    return (
        <SocialContact
            url={url}
            icon={icon}
        />
    )
}

export default Social;
