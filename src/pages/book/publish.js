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
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// Redux
import { connect } from "react-redux";
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
  publishBody: {
    display: "flex",
  },
  dialogTitle: {
    "& span": {
      color: "blue",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
});
class bookreview extends Component {
  state = {
    screamIdParam: null,
    open: false,
    bookTitle: null,
  };
  handleOpen = (e) => {
    this.setState({ open: true });
    this.setState({
      bookTitle: e.currentTarget.lastChild.textContent,
    });
    console.log(e.currentTarget.lastChild.textContent);
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
              div_name={scream.createdAt}
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
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle
          id="customized-dialog-title"
          className={classes.dialogTitle}
        >
          Do you want to proceed with writing chapters{" "}
          <span>{this.state.bookTitle}</span> ?
        </DialogTitle>
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
