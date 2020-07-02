import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// Components
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import BookCard from "../../components/book/BookCard";
import PostBook from "../../components/book/PostBook";
// Util
import Skeleton from "../../util/Skeleton";
import theme from "../../util/theme";
// MUI Core
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Box from "@material-ui/core/Box";
// Redux
import { connect } from "react-redux";
import { getBookData } from "../../redux/actions/bookActions";
import { getUserData } from "../../redux/actions/userActions";
// Image
import NoBookImg from "../../assets/images/no-book-img.png";
const styles = (theme) => ({
  ...theme.spread,
  inProgressTitle: {
    color: "#1c2a48",
    fontWeight: "bolder",
    fontFamily: "Times New Roman",
  },
  completedTitle: {
    color: "#f9a825",
    fontWeight: "bolder",
    fontFamily: "Times New Roman",
  },
  avatar: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
});
class publish extends Component {
  state = {
    bookIdParam: null,
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const bookId = this.props.match.params.bookId;

    if (bookId) {
      this.setState({ bookIdParam: bookId });
    }
    this.props.getUserData();
    this.props.getBookData(handle);
  }
  render() {
    const { books, loading } = this.props.data;
    const { classes } = this.props;
    const { bookIdParam } = this.state;
    let inProgressBooksMarkup = loading ? (
      <Skeleton image={NoBookImg} />
    ) : books === null ? (
      <p>No books from this user</p>
    ) : (
      <Fragment>
        <Carousel slidesPerPage={5} arrows>
          {books.map((book) => {
            if (book.bookId !== bookIdParam && book.bookCompleted === false)
              return <BookCard key={book.bookId} book={book} />;
            else return null;
          })}
        </Carousel>
      </Fragment>
    );
    let completedBookMarkup = loading ? (
      <Skeleton image={NoBookImg} />
    ) : books === null ? (
      <p>No books from this user</p>
    ) : (
      <Fragment>
        <Carousel slidesPerPage={5} arrows>
          {books.map((book) => {
            if (book.bookId !== bookIdParam && book.bookCompleted === true)
              return <BookCard key={book.bookId} book={book} />;
            else return null;
          })}
        </Carousel>
      </Fragment>
    );

    return (
      <Grid container direction="column" style={theme.spread.adjustTop}>
        <Box marginTop="2em">
          <Grid className={classes.inProgress}>
            <Box display="flex" marginBottom="8em">
              <Grid>
                <h2 className={classes.inProgressTitle}>In Progress</h2>
                <PostBook />
              </Grid>
              <Grid>
                <Box width="120em">{inProgressBooksMarkup}</Box>
              </Grid>
            </Box>
          </Grid>
          <Grid>
            <h2 className={classes.completedTitle}>Completed</h2>
            <Grid>
              <Grid>
                <Box width="120em">{completedBookMarkup}</Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    );
  }
}

publish.propTypes = {
  getUserData: PropTypes.func.isRequired,
  getBookData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

// redeucers from store.js
const mapStateToProps = (state) => ({
  data: state.bookData,
  user: state.user,
});

export default connect(mapStateToProps, { getBookData, getUserData })(
  withStyles(styles)(publish)
);
