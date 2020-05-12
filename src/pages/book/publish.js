import React, { Component } from "react";
import PropTypes from "prop-types";
// Components
import BookCard from "../../components/book/bookCard";
import PostBook from "../../components/book/PostBook";
// Util
import BookSkeleton from "../../util/BookSkeleton";
// MUI Core
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// Redux
import { connect } from "react-redux";
import { getBookData } from "../../redux/actions/bookActions";
import axios from "axios";
// Image
import Proudtalelogo from "../../assets/images/proudtalelogo.png";
const styles = (theme) => ({
  ...theme.spread,
  inProgress: {
    marginBottom: "5em",
  },
  inProgressTitle: {
    color: "#1c2a48",
    fontWeight: "bolder",
    fontFamily: "Times New Roman",
    textShadow: "2px 2px #fff",
  },
  bookCardContainer: {
    display: "flex",
  },
  publishBody: {
    display: "flex",
  },
  dialogDiv: {
    display: "flex",
  },
  dialogTitle: {
    textAlign: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
  dialogContent: {
    display: "flex",
    "& span": {
      color: "blue",
    },
    "& p": {
      fontSize: "1.1em",
    },
  },
});
class bookreview extends Component {
  state = {
    bookIdParam: null,
    open: false,
    bookTitle: null,
  };
  handleOpen = (e) => {
    this.setState({ open: true });
    this.setState({
      bookTitle: e.currentTarget.lastChild.textContent,
    });
    console.log(e.currentTarget.lastChild.textContent);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const bookId = this.props.match.params.bookId;

    if (bookId) this.setState({ bookIdParam: bookId });

    this.props.getBookData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({
          profile: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { books, loading } = this.props.data;
    const { classes } = this.props;
    const { bookIdParam } = this.state;
    let recentBooksMarkup = loading ? (
      <BookSkeleton />
    ) : books === null ? (
      <p>No books from this user</p>
    ) : !bookIdParam ? (
      books.map((book) => (
        <BookCard onClick={this.handleOpen} key={book.bookId} book={book} />
      ))
    ) : (
      books.map((book) => {
        if (book.bookId !== bookIdParam)
          return (
            <BookCard onClick={this.handleOpen} key={book.bookId} book={book} />
          );
        else return <BookCard key={book.bookId} book={book} openDialog />;
      })
    );
    let confirmDialog = (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby="customized-dialog-title"
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
                Do you want to proceed with{" "}
                <span>writing chapters of {this.state.bookTitle}</span> ?
              </p>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Yes
              </Button>
              <Button onClick={this.handleClose} color="secondary">
                No
              </Button>
            </DialogActions>
          </div>
        </div>
      </Dialog>
    );
    return (
      <div className="container">
        <Grid className={classes.inProgress}>
          <h2 className={classes.inProgressTitle}>In Progress</h2>
          <Grid className={classes.publishBody}>
            <PostBook />
            <div className={classes.bookCardContainer}>{recentBooksMarkup}</div>
          </Grid>
        </Grid>
        <Grid>
          <h2 className={classes.inProgressTitle}>Completed</h2>
          <Grid className={classes.publishBody}>
            <div className={classes.bookCardContainer}>{recentBooksMarkup}</div>
          </Grid>
        </Grid>
        {confirmDialog}
      </div>
    );
  }
}

bookreview.propTypes = {
  getBookData: PropTypes.func.isRequired,
  bookData: PropTypes.object.isRequired,
};

// redeucers from store.js
const mapStateToProps = (state) => ({
  data: state.bookData,
});

export default connect(mapStateToProps, { getBookData })(
  withStyles(styles)(bookreview)
);
