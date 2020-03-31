import React, { Component } from "react";
import Slider from "../components/slider/slider";
import withStyles from "@material-ui/core/styles/withStyles";

// md stuff

// Redux stuff
import { connect } from "react-redux";

const styles = (theme) => ({
  ...theme.spread,
  styleTitle: {
    color: "#1c2a48",
    fontWeight: "bolder",
    fontFamily: "cursive",
  },
});

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

class home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <h1 className={classes.styleTitle}>Book</h1>
          <Slider heading="Example Slider" slides={slideData} />
        </div>
        <div>
          <h1 className={classes.styleTitle}>Biography</h1>
          <Slider heading="Example Slider" slides={slideData} />
        </div>
        <div>
          <h1 className={classes.styleTitle}>Fiction</h1>
          <Slider heading="Example Slider" slides={slideData} />
        </div>
      </div>
    );
  }
}

export default connect()(withStyles(styles)(home));
