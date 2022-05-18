import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./messageDialog.css";

function messageDialog({
  message,
  onDialog,
  nameProduct,
  item,
  iconElement,
  redirect,
  buttonMessage,
}) {
  return (
    <div
      className="confirmation-dialog-container"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="confirmation-message-container"
      >
        {iconElement}
        <h3 className="confirmationH3">{message}</h3>
        {nameProduct ? (
          <h1 className="confirmationH1">"{nameProduct}"</h1>
        ) : (
          <></>
        )}
        <div style={{ display: "flex", alignItems: "center" }}>
          {redirect ? (
            <Button
              onClick={() => onDialog(true, item, "messageOk")}
              id="messageOk"
              variant="contained"
              color="primary"
              className="confirmation-btn yes-btn"
              component={Link}
              to={"/products"}
            >
              {buttonMessage}
            </Button>
          ) : (
            <Button
              onClick={() => onDialog(true, item, "messageOk")}
              id="messageOk"
              variant="contained"
              color="primary"
              className="confirmation-btn yes-btn"
            >
              {buttonMessage}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
export default messageDialog;
