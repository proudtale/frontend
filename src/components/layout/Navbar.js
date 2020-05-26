import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Components
import MyButton from "../../util/MyButton";
import Notifications from "./Notifications";

// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import withStyles from "@material-ui/core/styles/withStyles";
import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";
// import MuiLink from "@material-ui/core/Link";

// Icons
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import RateReviewIcon from "@material-ui/icons/RateReview";
// import TuneIcon from "@material-ui/icons/Tune";
// import EmailIcon from "@material-ui/icons/Email";

//Redux
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";
import Searchbar from "./Searchbar";
import MobileNavbar from "../../util/MobileNavbar";

const styles = (theme) => ({
  ...theme.spread,
  navbarImage: {
    width: 35,
    height: 35,
    borderRadius: "10%",
  },
  navbarHandle: {
    fontSize: "1em",
    display: "inline",
    margin: "0.1em 0.5em 0 0",
    color: "white",
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
