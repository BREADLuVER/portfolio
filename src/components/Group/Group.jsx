/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Group = ({ property1, className, type = 'resume' }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  const isResume = type === 'resume';
  const link = isResume
    ? `${import.meta.env.BASE_URL}resume/resume.pdf`
    : 'https://github.com/BREADLuVER';

  const label = isResume ? 'Resume' : 'GitHub';

  return (
    <div
      className={`group ${state.property1} ${className}`}
      onMouseLeave={() => dispatch("mouse_leave")}
      onMouseEnter={() => dispatch("mouse_enter")}
      onClick={() => dispatch("click")}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="overlap-group">
          {state.property1 === "default" && <div className="rectangle" />}
          <div className="div" />
          <div className="text-wrapper-2">{label}</div>
        </div>
      </a>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };

    case "click":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Group.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
