/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { TabDefault } from "../TabDefault";
import "./style.css";

export const Header = ({ className, tabDefaultTabDefaultClassName }) => {
  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContacts = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`header ${className}`}>
      <div className="text-wrapper">Brad Yin</div>

      <div className="nav">
        <TabDefault
          className="tab-default-instance"
          divClassName="design-component-instance-node"
          text="Projects"
          onClick={handleScrollToProjects}
        />
        <TabDefault
          className={tabDefaultTabDefaultClassName}
          divClassName="design-component-instance-node"
          text="Contacts"
          onClick={handleScrollToContacts}
        />
      </div>
    </div>
  );
};
