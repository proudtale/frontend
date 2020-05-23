import React from "react";

//MUI Core
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

//images
import Proudtalelogo from "../assets/images/proudtalelogo.png";
//
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  dialog: {
    width: "100%",
    padding: "1em",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    "& img": {
      marginLeft: "24px",
      width: "calc(15% - 24px)",
      borderRadius: "50%",
    },
  },
  firstDiv: {
    width: "100%",
    display: "flex",
    paddingBottom: "0.8em",
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
    "& span": {
      // color: "blue",
      wordWrap: "break-word",
    },
    "& p": {
      fontSize: "1.1em",
    },
  },
}));

export default function YesNoDialog({
  open,
  handleClose,
  title,
  dialogTitle,
  children,
  onClick,
  ...rest
}) {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      scroll="body"
      aria-labelledby="yes-no-dialog"
      {...rest}
    >
      <div className={classes.dialog}>
        <div className={classes.firstDiv}>
          <img className="logo" alt="proudtale logo" src={Proudtalelogo} />
          <DialogTitle>{dialogTitle}</DialogTitle>`
        </div>
        <div className={classes.secondDiv}>
          <Divider light />
          <DialogContent className={classes.dialogContent}>
            {children}
          </DialogContent>
          <DialogActions>
            <Button onClick={onClick} color="primary">
              Yes
            </Button>
            <Button onClick={handleClose} color="secondary">
              No
            </Button>
          </DialogActions>
        </div>
      </div>
    </Dialog>
  );
}
