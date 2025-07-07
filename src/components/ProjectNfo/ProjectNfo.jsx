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
  text1 = "At AMD, I developed the Radeon Display Insights Portal—a React + TypeScript dashboard used by the Display QA team to track real-time GPU telemetry for technologies like DisplayPort 2.1, HDR10+, and FreeSync. We replaced a tangle of older tools with a single, modern interface that visualized things like HDR activation timelines, refresh rate drift, and fault heatmaps across GPU models and firmware. I also developed a companion React Native app for QA engineers on the floor to scan displays, log faults, and view live test data while moving between setups—complete with local caching and QR-based pairing. The goal was to make telemetry not just accurate, but accessible wherever the work was happening.",
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
