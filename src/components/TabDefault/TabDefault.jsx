/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TabDefault = ({ className, divClassName, text = "Sobre", onClick }) => {
  return (
    <div className={`tab-default ${className}`} onClick={onClick}>
      <div className={`sobre ${divClassName}`}>{text}</div>
    </div>
  );
};

TabDefault.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
