import React from "react";

//MUI Core
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

//images
// import Proudtalelogo from "../assets/images/proudtalelogobgwhite.png";
//
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  dialog: {
    width: "100%",
    padding: "1em",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    background: "#0e1524",
  },
  firstDiv: {
    width: "100%",
    display: "flex",
    paddingBottom: "0.8em",
    color: "#fff",
  },
  secondDiv: {
    width: "100%",
    "& p": {
      marginTop: "0.5em",
    },
  },
  dialogTitle: {
    textAlign: "center",
    flexGrow: "1",
  },
  dialogContent: {
    color: "#fff",
    // "& span": {
    //   wordWrap: "break-word",
    //   color: "#fff",
    // },
    "& p": {
      fontSize: "1.1em",
      // color: "#fff"
    },
  },
  divider: {
    background: "#fff",
  },
}));

export default function ProudtaleDialog({
  open,
  handleClose,
  title,
  dialogTitle,
  children,
  dialogActions,
  maxWidth,
  dialogImage,
  ...rest
}) {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth={maxWidth}
      scroll="body"
      {...rest}
    >
      <div className={classes.dialog}>
        <div className={classes.firstDiv}>
          {dialogImage}
          <DialogTitle>{dialogTitle}</DialogTitle>
        </div>
        <div className={classes.secondDiv}>
          <Divider className={classes.divider} />
          <DialogContent className={classes.dialogContent}>
            {children}
          </DialogContent>
          <DialogActions>{dialogActions}</DialogActions>
        </div>
      </div>
    </Dialog>
  );
}
