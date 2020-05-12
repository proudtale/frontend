import React, { Component } from "react";
import Slider from "../components/slider/slider";
import withStyles from "@material-ui/core/styles/withStyles";

// MUI
import Grid from "@material-ui/core/Grid";
// Redux stuff
import axios from "axios";
const styles = (theme) => ({
  ...theme.spread,
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
    // const { classes } = this.props;
    const { isLoading, popularBook } = this.state;

    let homeMarkup = (
      <div className="container">
        <div>
          {!isLoading ? (
            <Grid parent>
              <Slider heading="Popular Book" slides={popularBook} />
            </Grid>
          ) : (
            <h4>Loading ...</h4>
          )}
        </div>
        <div>
          {!isLoading ? (
            <Grid parent>
              <Slider heading="Biography" slides={popularBook} />
            </Grid>
          ) : (
            <h4>Loading ...</h4>
          )}
        </div>
        <div>
          {!isLoading ? (
            <Grid parent>
              <Slider heading="Fiction" slides={popularBook} />
            </Grid>
          ) : (
            <h4>Loading ...</h4>
          )}
        </div>
      </div>
    );
    return homeMarkup;
  }
}
export default withStyles(styles)(home);
