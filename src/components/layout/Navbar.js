import React, { Component } from "react";
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

import Box from "@material-ui/core/Box";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import TuneIcon from "@material-ui/icons/Tune";
import EmailIcon from "@material-ui/icons/Email";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import LockOpenIcon from "@material-ui/icons/LockOpen";

//Redux
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";
import Searchbar from "./Searchbar";
import MobileNavbar from "../../util/MobileNavbar";

const styles = (theme) => ({
  ...theme.spread,
  navbarImage: {
    width: 50,
    height: 50,
    borderRadius: "10%",
  },
  navbarHandle: {
    display: "inline",
    fontWeight: "bolder",
    margin: "2em 0.7em 0 0",
  },
  navbarTitle: {
    fontFamily: "cursive",
  },
  test: {
    background: "green",
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
        <Toolbar className="nav-container mdb-color darken-3 d-flex justify-content-between">
          {/* proudtale log and website name in header */}
          <div className="align-verticle-flex">
            <Link to="/">
              <img
                height="60"
                widht="60"
                src={process.env.PUBLIC_URL + "/proudtalelog.png"}
                alt="proudetale"
              />
            </Link>
            <Box display={{ xs: "none", sm: "block" }}>
              <h4 className={classes.navbarTitle}>proudtale</h4>
            </Box>
          </div>
          {/* Right side in header */}
          <Box
            width="75%"
            display={{ xs: "none", md: "flex" }}
            justifyContent="end"
          >
            {authenticated ? (
              <React.Fragment>
                <Searchbar />
                <h4 className={classes.navbarHandle}>{handle}</h4>
                <img
                  src={imageUrl}
                  alt="profile"
                  className={classes.navbarImage}
                />
                <PostScream />
                <Notifications tip="Notification" />
                <Link to="/">
                  <MyButton tip="Home">
                    <HomeIcon />
                  </MyButton>
                </Link>
                <Link to="community">
                  <MyButton className="align-verticle-flex" tip="Community">
                    <PeopleIcon />
                  </MyButton>
                </Link>
                <MyButton
                  className="align-verticle-flex"
                  tip="Logout"
                  onClick={this.handleLogout}
                >
                  <MeetingRoomIcon color="primary" />
                </MyButton>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Searchbar />
                <Button>
                  <TuneIcon />
                </Button>
                <Button>
                  <EmailIcon />
                </Button>
                <Link className="align-verticle-flex" to="/">
                  <MyButton tip="Home">
                    <HomeIcon />
                  </MyButton>
                </Link>
                <Link className="align-verticle-flex" to="login">
                  <MyButton tip="Login">
                    <LockOpenIcon />
                  </MyButton>
                </Link>
              </React.Fragment>
            )}
          </Box>
          <MobileNavbar
            logoutUser={this.props.logoutUser}
            authenticated={authenticated}
          />
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
