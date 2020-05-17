import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";

// component
import BookTextEditor from "./TextEditor";

// MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

//MUI Icon
import CloseIcon from "@material-ui/icons/Close";
// import PublishIcon from "@material-ui/icons/Publish";

// Redux stuff
import { connect } from "react-redux";
import { postBook, clearErrors } from "../../redux/actions/bookActions";
// Image
import publishBookIcon from "../../assets/icons/publishbookicon.png";
const styles = (theme) => ({
  ...theme.spread,
  postbook: {
    display: "inline",
  },
  button: {
    background: "#1c2a48",
    marginTop: theme.spacing(0.7),
    fontSize: "8em",
    height: "2em",
    "& img": {
      width: "1.5em",
    },
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  uploadButton: {
    marginTop: "1em",
  },
});

class PostScream extends Component {
  state = {
    open: false,
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
    this.props.postBook({ title: this.state.title, desc: this.state.value });
  };
  handleBookImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    // this.props.uploadBookImage(formData);
    // this.setState({bookImage: formData});
    // console.log(formData);
    // console.log(this.state.value.bookImage);
  };
  handleAddPicture = () => {
    const fileInput = document.getElementById("bookImageInput");
    fileInput.click();
  };
  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.postbook}>
        <Fragment>
          <Button
            onClick={this.handleOpen}
            tip="Create book"
            className={classes.button}
          >
            <img src={publishBookIcon} alt="create book" />
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            maxWidth="lg"
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
                <h6 className="font-weight-bolder mt-5">Synopsis</h6>
                <BookTextEditor
                  type="text"
                  label="Book Synopsis"
                  setValue={this.setValue}
                />
                {/* <div className={classes.uploadButton}>
                  <input
                    type="file"
                    id="bookImageInput"
                    hidden="hidden"
                    onChange={this.handleBookImageChange}
                  />
                  <Button
                    tip="Book cover picture"
                    onClick={this.handleAddPicture}
                    color="primary"
                    variant="outlined"
                  >
                    <PublishIcon color="primary" />
                    Upload book cover image
                  </Button>
                </div> */}
              </form>
            </DialogContent>
          </Dialog>
        </Fragment>
      </div>
    );
  }
}

PostScream.propTypes = {
  postBook: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

export default connect(mapStateToProps, { postBook, clearErrors })(
  withStyles(styles)(PostScream)
);
