import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({ children }) => {
  return <button className="primary-button">{children}</button>;
};

export default PrimaryButton;
