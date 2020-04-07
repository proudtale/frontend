import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import MyButton from "../../util/MyButton";
// MUI Stuff
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
// Redux stuff
import { connect } from "react-redux";
import { postScream, clearErrors } from "../../redux/actions/dataActions";
//
import TextEditor from "./TextEditor";

const styles = (theme) => ({
  ...theme.spread,

  progressSpinner: {
    position: "absolute",
  },
  closeButton: {
    position: "absolute",
    left: "91%",
    top: "6%",
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
    const { classes, bookImage } = this.props;
    return (
      <Fragment>
        <MyButton onClick={this.handleOpen} tip="Create book">
          <AddIcon />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullScreen={true}
        >
          <MyButton
            tip="Close"
            onClick={this.handleClose}
            tipClassName={classes.closeButton}
            ml={20}
          >
            <CloseIcon />
          </MyButton>
          <DialogTitle>Publish your new book</DialogTitle>
          <DialogContent>
            <div className="image-wrapper">
              <img src={bookImage} alt="book" className="profile-image" />
              <input
                type="file"
                id="imageInput"
                hidden="hidden"
                onChange={this.handleImageChange}
              />
              <MyButton
                tip="Edit profile picture"
                onClick={this.handleEditPicture}
                btnClassName="button"
              >
                <EditIcon color="primary" />
              </MyButton>
            </div>

            <form onSubmit={this.handleSubmit}>
              <TextField
                name="title"
                type="text"
                label="Title"
                multiline
                placeholder="Title of your book"
                error={errors.body ? true : false}
                helperText={errors.body}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />
              <TextEditor type="text" label="Body" setValue={this.setValue} />
            </form>
          </DialogContent>
        </Dialog>
      </Fragment>
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
