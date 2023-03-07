import React from "react";
import "./SecondaryButton.css";

const SecondaryButton = ({ children }) => {
  return <button className="secondary-button">{children}</button>;
};

export default SecondaryButton;
