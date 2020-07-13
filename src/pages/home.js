import React, { Component } from "react";
// import Slider from "../components/slider/slider";
import withStyles from "@material-ui/core/styles/withStyles";
import BookContentCarousel from "../components/carousel/BookContentCarousel";
import theme from "../util/theme";
// MUI
// import Grid from "@material-ui/core/Grid";
// Redux stuff
import { getBooks, clearErrors } from "../redux/actions/bookActions";
// import { formatStringThumbnail } from "../util/helpers";
import { connect } from "react-redux";

const styles = (theme) => ({
  ...theme.spread,
});
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularBook: [],
    };
    this.props.getBooks();
    this.props.clearErrors();
  }
  // state = {
  //   popularBook: [],
  // };
  // componentDidMount() {
  //   this.props.getBooks();
  // }
  render() {
    const {
      book: { loading, books },
    } = this.props;
    const popularBook = books.map((book, index) => ({
      title: book.title,
      author: book.userHandle,
      bookImage: book.bookImageUrl,
      desc: book.desc,
      userImage: book.userImage,
      createdAt: book.createdAt,
      index,
    }));
    let homeMarkup = (
      <div style={theme.spread.adjustTop}>
        <div>
          {!loading ? (
            <BookContentCarousel category="Popular" books={popularBook} />
          ) : (
            <h4>Loading ...</h4>
          )}
        </div>
        <div>
          {!loading ? (
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
  book: state.book,
  UI: state.UI,
});
export default connect(mapStateToProps, { getBooks, clearErrors })(
  withStyles(styles)(home)
);
