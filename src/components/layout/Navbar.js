import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import PostScream from "../scream/PostScream";
import Notifications from "./Notifications";
import withStyles from "@material-ui/core/styles/withStyles";
// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
// Icons
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import TuneIcon from "@material-ui/icons/Tune";
import EmailIcon from "@material-ui/icons/Email";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";

//Redux
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";

const styles = (theme) => ({
  ...theme,
  navbarImage: {
    width: 50,
    height: 50,
    borderRadius: "10%",
  },
  navbarHandle: {
    marginRight: "10px",
  },
});

class Navbar extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const {
      classes,
      credentials: { imageUrl, handle },
      authenticated,
    } = this.props;
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              <h3 className={classes.navbarHandle}>{handle}</h3>
              <img
                src={imageUrl}
                alt="profile"
                className={classes.navbarImage}
              />
              <PostScream />
              <Notifications />
              <Link to="/">
                <MyButton tip="Home">
                  <HomeIcon />
                </MyButton>
              </Link>
              <MyButton tip="Logout" onClick={this.handleLogout}>
                <MeetingRoomIcon color="primary" />
              </MyButton>
            </Fragment>
          ) : (
            <Fragment>
              <Button>
                <TuneIcon />
              </Button>
              <Button>
                <EmailIcon />
              </Button>
              <Button>
                <PeopleIcon />
              </Button>
              <Button color="inherit" component={Link} to="/">
                <HomeIcon />
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapActionsToProps = { logoutUser };

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  credentials: state.user.credentials,
  authenticated: state.user.authenticated,
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Navbar));
