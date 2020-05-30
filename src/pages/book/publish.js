import React, { Component } from "react";
import PropTypes from "prop-types";
// Components
import BookCard from "../../components/book/BookCard";
import PostBook from "../../components/book/PostBook";
// Util
import Skeleton from "../../util/Skeleton";
// MUI Core
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

// Redux
import { connect } from "react-redux";
import { getBookData } from "../../redux/actions/bookActions";
import axios from "axios";
// Image
import NoBookImg from "../../assets/images/no-book-img.png";
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
  avatar: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
});
class bookreview extends Component {
  state = {
    bookIdParam: null,
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
      <Skeleton image={NoBookImg} />
    ) : books === null ? (
      <p>No books from this user</p>
    ) : !bookIdParam ? (
      books.map((book) => <BookCard key={book.bookId} book={book} />)
    ) : (
      books.map((book) => {
        if (book.bookId !== bookIdParam)
          return <BookCard key={book.bookId} book={book} />;
        else return <BookCard key={book.bookId} book={book} openDialog />;
      })
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
        </Grid>
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
