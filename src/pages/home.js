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
<<<<<<< HEAD
  getPopluarBook() {
    axios({
      method: "GET",
      url: "https://us-central1-socialape-aa1d6.cloudfunctions.net/api/books",
      params: {
        format: "json",
      },
    })
      // .then( res => {
      //   console.log(res.data);
      // })
      .then((res) =>
        res.data.map((book, index) => ({
          index: index,
          title: book.title,
          author: book.userHandle,
          bookImage: book.bookImageUrl,
          desc: book.desc,
          userImage: book.userImage,
        }))
      )
      .then((popularBook) => {
        this.setState({
          popularBook,
          isLoading: false,
        });
        // console.log(popularBook)
      })
      .catch((error) => {
        this.setState({ error, isLoading: false });
      });
  }
=======

>>>>>>> did some work
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
<<<<<<< HEAD
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
=======
        {!loading ? (
          <Slider heading="Popular Book" slides={popularBook} />
        ) : (
          <h4>Loading ...</h4>
        )}
        {!loading ? (
          <Slider heading="Biography" slides={popularBook} />
        ) : (
          <h4>Loading ...</h4>
        )}
        {!loading ? (
          <Slider heading="Fiction" slides={popularBook} />
        ) : (
          <h4>Loading ...</h4>
        )}
>>>>>>> did some work
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
