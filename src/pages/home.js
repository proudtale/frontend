import React, { Component } from "react";
import Slider from "../components/slider/slider";
// import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

// md stuff

// Redux stuff
import { connect } from "react-redux";

const styles = (theme) => ({
  ...theme.spread,
  styleTitle: {
    color: "white",
    fontWeight: "bolder",
    fontFamily: "cursive",
    textShadow: "2px 1px #1c2a48",
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
    const {
      classes,
      // scream: {
      //   // title,
      //   userImage
      //   // userHandle,
      //   // screamId,
      // }
    } = this.props;

    let homeMarkup = (
      <div>
        {/* <div>
          <img src={userImage} alt="profile" className="profile-image" />
        </div> */}
        <div>
          <h1 className={classes.styleTitle}>Popular Book</h1>
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
    return homeMarkup;
  }
}
// home.propTypes = {
//   user: PropTypes.object.isRequired,
//   classes: PropTypes.object.isRequired,
//   scream: PropTypes.object.isRequired,
// }

// const mapStateToProps = (state) => ({
//   user: state.user,
//   scream: state.data.scream
// });

export default connect()(withStyles(styles)(home));
