import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";

// component
import TextEditor from "../layout/TextEditor";

// MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

//MUI Icon
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

// Redux stuff
import { connect } from "react-redux";
import { postScream, clearErrors } from "../../redux/actions/dataActions";

const styles = (theme) => ({
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

class PostScream extends Component {
  state = {
    open: false,
    // text: '',
    title: "",
    value: "",
    errors: {},
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors,
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ title: "", value: "", open: false, errors: {} });
    }
  }

  setValue = (val) => {
    this.setState({ value: val });
  };
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
    console.log("HIII");
    this.props.postScream({ title: this.state.title, body: this.state.value });
  };
  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Fragment>
          <Button
            onClick={this.handleOpen}
            tip="Create book"
            className={classes.button}
          >
            <AddIcon />
            Create your book
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            maxWidth="xl"
            fullWidth={true}
            aria-labelledby="scroll-dialog-title"
          >
            <DialogTitle id="scroll-dialog-title">
              Publish your new book
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
              <div className="image-wrapper">
                <input
                  type="file"
                  id="imageInput"
                  hidden="hidden"
                  onChange={this.handleImageChange}
                />
              </div>
              <form onSubmit={this.handleSubmit}>
                <TextField
                  name="title"
                  type="text"
                  label="Book Title"
                  multiline
                  placeholder="Input your book title"
                  error={errors.body ? true : false}
                  helperText={errors.body}
                  className={classes.textField}
                  onChange={this.handleChange}
                  fullWidth
                />
                <h6 className="font-weight-bolder mt-5">Book Body</h6>
                <TextEditor type="text" label="Body" setValue={this.setValue} />
              </form>
            </DialogContent>
          </Dialog>
        </Fragment>
      </div>
    );
  }
}

PostScream.propTypes = {
  postScream: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

export default connect(mapStateToProps, { postScream, clearErrors })(
  withStyles(styles)(PostScream)
);
