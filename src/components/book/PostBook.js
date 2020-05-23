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
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

//MUI Icon
import CloseIcon from "@material-ui/icons/Close";
import PublishIcon from "@material-ui/icons/Publish";

// Redux stuff
import { connect } from "react-redux";
import {
  postBook,
  clearErrors,
  initialPostBookImage,
} from "../../redux/actions/bookActions";
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
  editbtn: {
    display: "inline",
    "& label": {
      cursor: "pointer",
    },
  },
  input: {
    display: "none",
  },
  box: {
    paddingTop: "1em",
    "& button": {
      padding: "0",
      "&:hover": {
        borderRadius: "0",
      },
    },
  },
});

class PostScream extends Component {
  state = {
    open: false,
    title: "",
    value: "",
    bookImageUrl: "",
    errors: {},
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors,
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({
        title: "",
        value: "",
        open: false,
        bookImage: {},
        errors: {},
      });
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
    this.props.postBook({
      title: this.state.title,
      desc: this.state.value,
      bookImageUrl: this.state.bookImageUrl,
    });
  };

  postBookImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    let imageFileName = image.name;
    const imageExtension = imageFileName.split(".")[
      imageFileName.split(".").length - 1
    ];
    imageFileName = `${Math.round(
      Math.random() * 1000000000000
    ).toString()}.${imageExtension}`;
    console.log(imageFileName);
    formData.append("image", image, imageFileName);
    this.props.initialPostBookImage(formData);
    const storageBucket = "socialape-aa1d6.appspot.com";
    const initialBookImageUrl = `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o/initialcoverimage%2F${imageFileName}?alt=media`;
    this.setState({ bookImageUrl: initialBookImageUrl });
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
                <Box className={classes.box}>
                  <MyButton tip="Add book cover picture">
                    <Typography className={classes.editbtn}>
                      <label className="bookImageInput">
                        <input
                          className={classes.input}
                          type="file"
                          id="bookImageInput"
                          onChange={this.postBookImageChange}
                        />
                        <PublishIcon color="primary" />
                        <Typography variant="span" color="primary">
                          Upload book cover image
                        </Typography>
                      </label>
                    </Typography>
                  </MyButton>
                </Box>
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

export default connect(mapStateToProps, {
  postBook,
  clearErrors,
  initialPostBookImage,
})(withStyles(styles)(PostScream));
