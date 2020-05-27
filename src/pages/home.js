import React, { Component } from "react";
// import Slider from "../components/slider/slider";
import withStyles from "@material-ui/core/styles/withStyles";
import BookContentCarousel from "../components/carousel/BookContentCarousel";

// MUI
// import Grid from "@material-ui/core/Grid";
// Redux stuff
import { getBooks } from "../redux/actions/bookActions";
import { formatStringThumbnail } from "../util/helpers";
import { connect } from "react-redux";

const styles = (theme) => ({
  ...theme.spread,
});
class home extends Component {
  state = {
    popularBook: [],
  };
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    const {
      bookData: { loading, books, error },
    } = this.props;
    const popularBook = books.map((book, index) => ({
      title: formatStringThumbnail(book.title),
      author: book.userHandle,
      bookImage: book.bookImageUrl,
      index,
    }));
    let homeMarkup = (
      <div className="container">
        {/* <div>
          {!isLoading ? (
            <Grid parent>
              <Slider heading="Popular Book" slides={popularBook} />
            </Grid>
          ) : (
            <h4>Loading ...</h4>
          )}
        </div> */}
        <div>
          {!isLoading ? (
            <BookContentCarousel category="Popular" books={popularBook} />
          ) : (
            <h4>Loading ...</h4>
          )}
        </div>
        <div>
          {!isLoading ? (
            <BookContentCarousel category="Fairy Tale" books={popularBook} />
          ) : (
            <h4>Loading ...</h4>
          )}
        </div>
      </div>
    );
    return homeMarkup;
  }
}

const mapStateToProps = (state) => ({
  bookData: state.bookData,
  UI: state.UI,
});
export default connect(mapStateToProps, { getBooks })(withStyles(styles)(home));
