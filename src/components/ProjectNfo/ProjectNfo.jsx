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
  text1 = "At AMD, I helped build the Radeon Display Insights Portal—a React-based internal tool for the Display QA team to track and validate real-time GPU telemetry. The dashboard replaced legacy systems and supported new display tech like DisplayPort 2.1 and HDR10+. I worked on features like the HDR timeline viewer, FreeSync drift monitor, and a heatmap of display faults.",
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
