import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";

//Components
import DeleteBook from "./DeleteBook";

// MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// Icons

// Redux
import { connect } from "react-redux";

const styles = {
  card: {
    width: "11.5em",
    position: "relative",
    display: "flex",
    margin: "0.7em 0.5em 0.5em 3em",
  },
  image: {
    minWidth: "12em",
    minHeight: "15em",
  },
  title: {
    fontSize: "1.2em",
    textAlign: "center",
    marginTop: "3em",
    color: "white",
  },
  createdat: {
    color: "#00d9fd",
    padding: "0.5em",
    fontWeight: "bold",
  },
  deletebtn: {
    color: "#8b0000",
    margin: "3.3em 0 0 8.5em",
    padding: "0",
  },
};

class Scream extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      scream: { title, createdAt, userImage, userHandle, screamId },
      user: {
        authenticated,
        credentials: { handle },
      },
      onClick,
    } = this.props;

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteBook screamId={screamId} title={title} />
      ) : null;

    return (
      <Typography className={classes.card}>
        <CardMedia
          image={userImage}
          title="User image"
          className={classes.image}
        >
          <Link onClick={onClick}>
            <Fragment>
              <Typography
                className={classes.createdat}
                variant="body2"
                color="textSecondary"
              >
                {dayjs(createdAt).fromNow()}
              </Typography>
              <Typography variant="body1" className={classes.title}>
                {title}
              </Typography>
            </Fragment>
          </Link>
          <Typography className={classes.deletebtn}>{deleteButton}</Typography>
        </CardMedia>
      </Typography>
    );
  }
}

Scream.propTypes = {
  // user: PropTypes.object.isRequired,
  scream: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Scream));
