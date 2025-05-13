/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { TabDefault } from "../TabDefault";
import "./style.css";

export const Header = ({ className, tabDefaultTabDefaultClassName }) => {
  return (
    <div className={`header ${className}`}>
      <div className="text-wrapper">Brad Yin</div>

      <div className="nav">
        <TabDefault
          className="tab-default-instance"
          divClassName="design-component-instance-node"
          text="Projects"
        />
        <TabDefault
          className={tabDefaultTabDefaultClassName}
          divClassName="design-component-instance-node"
          text="Contacts"
        />
      </div>
    </div>
  );
};
