import React from "react";
import { Button } from "react-bootstrap";
import "./Button.css";

const ButtonAll = (props) => {
  return (
    <>
      <Button className="main_button">{props.title}</Button>
    </>
  );
};

export default ButtonAll;
