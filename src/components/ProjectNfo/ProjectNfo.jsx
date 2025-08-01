/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ProjectNfo = ({
  className,
  frameClassName,
  text = "AMD (2023-present)",
  textClassName,
  text1="At AMD, I built AMD’s new QA telemetry dashboard for GPU display validation using React 18, TypeScript, Node.js, and WebSockets. Delivered tools like the HDR Timeline Viewer and FreeSync Inspector for real-time debugging. Shipped internal systems for log tagging, anomaly detection, and replayable test sessions. Collaborated with firmware teams to standardize telemetry formats. Stack: React, Node.js, D3.js, PostgreSQL, Docker, WebSocket, Jest, Storybook, GitLab"
}) => { 
  return (
    <div className={`project-nfo ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <div className="text">{text}</div>

        <p className={`p ${textClassName}`}>{text1}</p>
      </div>
    </div>
  );
};

ProjectNfo.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
