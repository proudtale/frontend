import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";

// MUI Stuff
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DeleteOutline from "@material-ui/icons/DeleteOutline";

import { connect } from "react-redux";
import { deleteScream } from "../../redux/actions/dataActions";
// Image
import Proudtalelogo from "../../assets/images/proudtalelogo.png";
const styles = {
  deleteButton: {
    // position: "absolute",
    // left: "90%",
    // top: "10%",
  },
  dialogDiv: {
    display: "flex",
  },
  dialogTitle: {
    textAlign: "center",
  },
  dialogContent: {
    display: "flex",
    "& span": {
      color: "red",
    },
    "& p": {
      fontSize: "1.1em",
    },
  },
};

class DeleteScream extends Component {
  state = {
    open: false,
  };
  handleOpen = (e) => {
    this.setState({ open: true });
    console.log(e);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  deleteBook = () => {
    this.props.deleteScream(this.props.screamId);
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <MyButton
          tip="Delete Book"
          onClick={this.handleOpen}
          btnClassName={classes.deleteButton}
        >
          <DeleteOutline color="secondary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <div className={classes.dialogDiv}>
            <img alt="proudtale logo" src={Proudtalelogo} />
            <div>
              <DialogTitle
                id="customized-dialog-title"
                className={classes.dialogTitle}
              >
                Proudtale Confirmation Dialog
              </DialogTitle>
              <DialogContent className={classes.dialogContent}>
                <p>
                  Are you sure you want to{" "}
                  <span>delete {this.props.title}</span> ?
                </p>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={this.deleteBook} color="secondary">
                  Delete
                </Button>
              </DialogActions>
            </div>
          </div>
        </Dialog>
      </Fragment>
    );
  }
}
DeleteScream.propTypes = {
  deleteScream: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  screamId: PropTypes.string.isRequired,
};
export default connect(null, { deleteScream })(
  withStyles(styles)(DeleteScream)
);
