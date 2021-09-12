import React from "react";
import "./Modal.css";
import Backdrop from "../backdrop/Backdrop";

export default function Modal(props) {
  return (
    <>
      <Backdrop show={props.show} modalClosed={props.modalClosed} />
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
        className={"Modal"}
      >
        {props.children}
      </div>
    </>
  );
}
