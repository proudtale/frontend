import React, { Component } from "react";
import Slider from "../components/slider/slider";
import withStyles from "@material-ui/core/styles/withStyles";

// Redux stuff
import axios from "axios";

const styles = (theme) => ({
  ...theme.spread,
  styleTitle: {
    color: "white",
    fontWeight: "bolder",
    fontFamily: "cursive",
    textShadow: "2px 1px #1c2a48",
  },
});

const popularBook = [];
function Book(index, title, author, bookImage) {
  this.index = index;
  this.title = title;
  this.author = author;
  this.bookImage = bookImage;
}
class home extends Component {
  componentDidMount() {
    axios
      .get("https://us-central1-socialape-aa1d6.cloudfunctions.net/api/screams")
      .then((res) => {
        let books = res.data;
        let n = 0;
        while (n < books.length) {
          let book = new Book(
            n,
            books[n].title,
            books[n].userHandle,
            books[n].userImage
          );
          popularBook.push(book);
          n++;
        }
        console.log(books);
        console.log(popularBook);
        this.setState(popularBook);
      });
  }
  render() {
    const { classes } = this.props;
    let homeMarkup = (
      <div>
        <div>
          <h1 className={classes.styleTitle}>Popular Book</h1>
          <Slider heading="Popular Book" slides={popularBook} />
        </div>
        <div>
          <h1 className={classes.styleTitle}>Biography</h1>
          <Slider heading="Biography" slides={popularBook} />
        </div>
        <div>
          <h1 className={classes.styleTitle}>Fiction</h1>
          <Slider heading="Fiction" slides={popularBook} />
        </div>
      </div>
    );
    return homeMarkup;
  }
}

export default withStyles(styles)(home);
