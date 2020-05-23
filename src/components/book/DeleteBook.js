import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";

// MUI Stuff
import DeleteOutline from "@material-ui/icons/DeleteOutline";

import { connect } from "react-redux";
import { deleteBook } from "../../redux/actions/bookActions";
// Image
import YesNoDialog from "../../util/YesNoDialog";
const styles = {
  deleteButton: {
    padding: "0",
    color: "#fb4207",
  },
};

class DeleteBook extends Component {
  state = {
    open: false,
  };
  handleOpen = (e) => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  deleteBook = () => {
    this.props.deleteBook(this.props.bookId);
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
        <YesNoDialog
          handleClose={this.handleClose}
          open={this.state.open}
          title={this.props.title}
          dialogTitle={<div>Confirm delete the book</div>}
          onClick={this.deleteBook}
        >
          <p>
            Are you sure you want to delete{" "}
            <span className={classes.deleteButton}>{this.props.title}</span> ?
          </p>
        </YesNoDialog>
      </Fragment>
    );
  }
}
DeleteBook.propTypes = {
  deleteBook: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  bookId: PropTypes.string.isRequired,
};
export default connect(null, { deleteBook })(withStyles(styles)(DeleteBook));
