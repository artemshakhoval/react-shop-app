import React from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.css";

const BackDrop = ({ hideModalHandler }) => {
  return <div className={classes.backdrop} onClick={hideModalHandler} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div>{children}</div>
    </div>
  );
};

const Modal = ({ children, hideModalHandler }) => {
  const modalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop hideModalHandler={hideModalHandler} />,
        modalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        modalElement
      )}
    </>
  );
};

export default Modal;
