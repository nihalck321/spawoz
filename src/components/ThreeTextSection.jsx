import React from "react";

const ThreeTextSection = (props) => {
  return (
    <>
      <span>{props.heading}</span>
      <h2 style={props.st}>{props.title}</h2>
      <p>{props.text}</p>
    </>
  );
};

export default ThreeTextSection;
