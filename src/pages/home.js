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
class home extends Component {
  state = {
    popularBook: [],
    isLoading: true,
    error: null,
  };
  getPopluarBook() {
    axios({
      method: "GET",
      url: "https://us-central1-socialape-aa1d6.cloudfunctions.net/api/screams",
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
          bookImage: book.userImage,
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
  componentDidMount() {
    this.getPopluarBook();
  }
  render() {
    const { classes } = this.props;
    const { isLoading, popularBook } = this.state;
    let homeMarkup = (
      <div>
        <div>
          {!isLoading ? (
            <div>
              <h1 className={classes.styleTitle}>Popular Book</h1>
              <Slider heading="Popular Book" slides={popularBook} />
            </div>
          ) : (
            <p>Loading ...</p>
          )}
        </div>
        <div>
          {!isLoading ? (
            <div>
              <h1 className={classes.styleTitle}>Biography</h1>
              <Slider heading="Popular Book" slides={popularBook} />
            </div>
          ) : (
            <p>Loading ...</p>
          )}
        </div>
        <div>
          {!isLoading ? (
            <div>
              <h1 className={classes.styleTitle}>Popular Book</h1>
              <Slider heading="Popular Book" slides={popularBook} />
            </div>
          ) : (
            <p>Loading ...</p>
          )}
        </div>
      </div>
    );
    return homeMarkup;
  }
}
export default withStyles(styles)(home);
