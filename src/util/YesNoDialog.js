import React from "react";

//MUI Core
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

//images
import Proudtalelogo from "../assets/images/proudtalelogo.png";
//
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  dialogDiv: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    "& img": {
      marginLeft: "24px",
      width: "calc(25% - 24px)",
      borderRadius: "50%",
    },
  },
  half: {
    width: "75%",
  },
  dialogTitle: {
    textAlign: "center",
    flexGrow: "1",
  },
  dialogContent: {
    "& span": {
      color: "blue",
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
  children,
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
      <div className={classes.dialogDiv}>
        <img className="logo" alt="proudtale logo" src={Proudtalelogo} />
        <div className={classes.half}>
          <DialogContent className={classes.dialogContent}>
            {children}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
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
