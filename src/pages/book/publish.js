import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import PostBook from "../../components/book/PostBook";
import Slider from "../../components/slider/slider";

// MUI Core
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { withStyles } from "@material-ui/core/styles";

// Redux
import { connect } from "react-redux";

const styles = (theme) => ({
  bg: {
    padding: "3% 2%",
    overflow: "hidden",
  },
});

class publish extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Grid parent>
        <Grid>
          <PostBook />
        </Grid>
        <Grid>
          <Slider heading="In Progress" slides={slideData}></Slider>
        </Grid>
        <Grid>
          <Slider heading="Completed" slides={slideData}></Slider>
        </Grid>
      </Grid>
    );
  }
}

const slideData = [
  {
    index: 0,
    headline: "New Fashion",
    button: "Read Now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
  },
  {
    index: 1,
    headline: "In The Wilderness",
    button: "Read Now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
  },
  {
    index: 2,
    headline: "For Your Current Mood",
    button: "Read Now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
  },
  {
    index: 3,
    headline: "Focus On The Writing",
    button: "Read Now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
  {
    index: 4,
    headline: "New Fashion Trend",
    button: "Read Now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
  },
  {
    index: 5,
    headline: "In The Wilderness",
    button: "Read Now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
  },
  {
    index: 6,
    headline: "For Your Current Mood",
    button: "Read Now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
  },
  {
    index: 7,
    headline: "Focus On The Writing",
    button: "Read Now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
];

publish.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(withStyles(styles)(publish));
