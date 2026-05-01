import React from "react";
import videoMp4  from '../img/Love-Coding.mp4';
import videoWebm from '../img/Love-Coding.webm';

const BackgroundVideo = () => {
    return (
        <div className="bg-video">
            {/* Actual video */}
            <video className="bg-video__content" autoPlay muted loop playsInline>
                <source src={videoMp4}  type="video/mp4" />
                <source src={videoWebm} type="video/webm" />
            </video>

            {/* Dark overlay so text stays readable */}
            <div className="bg-video__overlay" />

            {/* 3D grid on top */}
            <div className="bg-video__grid" />

            {/* Glowing orbs */}
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <div key={i} className={`particle particle-${i + 1}`} />
            ))}
        </div>
    );
};

export default BackgroundVideo;
