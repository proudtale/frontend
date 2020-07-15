/**
 * Copyright (c) 2020 proudtale
 * All rights reserved.
 *
 * Filename: ChapterChapter.js
 *
 * Key Options:
 * -
 *
 * Revision History:
 * - 05 June 2020, Queenie : Created
 * - 11 July 2020, Martin Hwang <m.hwang@proudtale.com> : Fixed and modified
 */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
// MUI core
import withStyles from "@material-ui/core/styles/withStyles";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

// MUI Icon
import CloseIcon from "@material-ui/icons/Close";
// Redux
import { connect } from "react-redux";
import { clearErrors } from "../../redux/actions/dataActions";
// import { addChapter } from "../../redux/actions/chapterActions";
import { postChapter } from "../../redux/actions/chapterActions";

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
  submitButton: {
    "& :hover": {
      background: "rgb(28, 42, 72)",
      color: "#fff",
    },
    marginTop: "1em",
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
      this.setState({
        title: "",
        open: false,
        errors: {},
      });
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
    let newChatper = {
      title: this.state.title,
      body: `<h1>${this.state.title}</h1><br/>
      <h2>Write your awesome story</h2>`,
    };
    this.props.postChapter(newChatper, this.props.bookId);
    // this.props.history.push(
    //   `/book/${this.props.bookId}/chapter/${this.state.title}`
    // );
    // // temporarily adding chapter to local state
    // this.props.addChapter(chapter, this.props.bookId);

    // this.setState({ open: false });
  };
  render() {
    const { errors } = this.state;
    const {
      classes,
      UI: { loading },
    } = this.props;
    const createChapterDialog = (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        maxWidth="xs"
        aria-labelledby="scroll-dialog-title"
        fullWidth
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
            <Box
              className={classes.submitButton}
              display="flex"
              justifyContent="center"
            >
              <Button variant="outlined" type="submit" disabled={loading}>
                Submit
                {loading && (
                  <CircularProgress
                    size={30}
                    className={classes.progressSpinner}
                  />
                )}
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    );
    return (
      <Fragment>
        {createChapterDialog}
        <Button className={classes.button} onClick={this.handleOpen} fullWidth>
          +
        </Button>
      </Fragment>
    );
  }
}

CreateChapter.propTypes = {
  postChapter: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
  // chapter: state.chapterData.chapter,
});

// export default connect(mapStateToProps, { clearErrors, addChapter })(
//   withStyles(styles)(withRouter(CreateChapter))
// );
export default connect(mapStateToProps, { clearErrors, postChapter })(
  withStyles(styles)(CreateChapter)
);
