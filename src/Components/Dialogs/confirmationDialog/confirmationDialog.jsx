import React from "react";
import { Button } from "@material-ui/core";
import "./confirmationDialog.css";

function Dialog({ message, onDialog, nameProduct, item, iconElement }) {
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
          <Button
            onClick={() => {
              document.getElementById("confirmationNo").classList.add("hidden");
              onDialog(true, item, "confirmationYes");
            }}
            id="confirmationYes"
            variant="contained"
            color="primary"
            className="confirmation-btn yes-btn"
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              onDialog(false, item, "confirmationNo");
            }}
            variant="contained"
            id="confirmationNo"
            className="confirmation-btn no-btn"
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Dialog;
