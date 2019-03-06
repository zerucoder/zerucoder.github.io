import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@material-ui/core";
const Modal = props => {
  return (
    <Dialog
      open={props.open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Error"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={props.close}>
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
