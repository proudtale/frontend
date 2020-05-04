//Material
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

//MUI
import CloseIcon from "@material-ui/icons/Close";

import React, { Component } from "react";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";

import { connect } from "react-redux";
import { clearErrors } from "../../redux/actions/dataActions";

const styles = (theme) => ({
  ...theme.primary,
  ...theme.spread,

  button: {
    fontSize: "1.2em",
    marginBottom: theme.spacing(2),
    color: "#fff",
    padding: "0.5em",
    background: "#1c2a48",
  },
  progressSpinner: {
    position: "absolute",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
//TODO: Connect with React
class CreateChapter extends Component {
  state = {
    open: false,
    title: "",
    errors: {},
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors,
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ title: "", open: false, errors: {} });
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.props.clearErrors();
    this.setState({ open: false, errors: {} });
  };
  handleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("submit");
  };
  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Button className={classes.button} onClick={this.handleOpen} fullWidth>
          +
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          maxWidth="xl"
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">
            New Chapter
            <MyButton
              tip="Close"
              onClick={this.handleClose}
              tipClassName={classes.closeButton}
              ml={20}
            >
              <CloseIcon />
            </MyButton>
          </DialogTitle>
          <DialogContent dividers>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name="title"
                type="text"
                label="Chapter title"
                multiline
                placeholder="Chapter ..."
                error={errors.body ? true : false}
                helperText={errors.body}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />
              <Button type="submit">Submit</Button>
            </form>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

CreateChapter.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

export default connect(mapStateToProps, { clearErrors })(
  withStyles(styles)(CreateChapter)
);
