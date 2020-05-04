import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import BookCard from "../../components/book/bookCard";
import PostBook from "../../components/book/PostBook";
// Util
import ScreamSkeleton from "../../util/ScreamSkeleton";
// MUI Core
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

// Redux
import { connect } from "react-redux";
// import { getScreams } from "../../redux/actions/dataActions";
import { getBookData } from "../../redux/actions/dataActions";
import axios from "axios";

const styles = (theme) => ({
  ...theme.spread,
  inProgress: {
    marginBottom: "5em",
  },
  inProgressTitle: {
    color: "#1c2a48",
    fontWeight: "bolder",
    fontFamily: "Times New Roman",
    textShadow: "2px 2px #fff",
  },
  bookCardContainer: {
    display: "flex",
  },
  publishHeader: {
    background: "red",
    width: "100%",
  },
  publishBody: {
    display: "flex",
  },
});
class bookreview extends Component {
  state = {
    screamIdParam: null,
    open: false,
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const screamId = this.props.match.params.screamId;

    if (screamId) this.setState({ screamIdParam: screamId });

    this.props.getBookData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({
          profile: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { screams, loading } = this.props.data;
    const { classes } = this.props;
    const { screamIdParam } = this.state;
    let recentScreamsMarkup = loading ? (
      <ScreamSkeleton />
    ) : screams === null ? (
      <p>No screams from this user</p>
    ) : !screamIdParam ? (
      screams.map((scream) => (
        <BookCard
          onClick={this.handleOpen}
          key={scream.screamId}
          scream={scream}
        />
      ))
    ) : (
      screams.map((scream) => {
        if (scream.screamId !== screamIdParam)
          return (
            <BookCard
              onClick={this.handleOpen}
              key={scream.screamId}
              scream={scream}
            />
          );
        else
          return <BookCard key={scream.screamId} scream={scream} openDialog />;
      })
    );
    let confirmDialog = (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Do you want to proceed with writing chapters</DialogTitle>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Yes
          </Button>
          <Button onClick={this.handleClose} color="secondary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    );
    return (
      <div className="container">
        <Grid className={classes.inProgress}>
          <h2 className={classes.inProgressTitle}>In Progress</h2>
          <Grid className={classes.publishBody}>
            <PostBook />
            <div className={classes.bookCardContainer}>
              {recentScreamsMarkup}
            </div>
          </Grid>
        </Grid>
        <Grid>
          <h2 className={classes.inProgressTitle}>Completed</h2>
          <Grid className={classes.publishBody}>
            <div className={classes.bookCardContainer}>
              {recentScreamsMarkup}
            </div>
          </Grid>
        </Grid>
        {confirmDialog}
      </div>
    );
  }
}

bookreview.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getBookData })(
  withStyles(styles)(bookreview)
);
