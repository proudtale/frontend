import React, { Component } from "react";
import PropTypes from "prop-types";
// MUI Core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// Components
// import Scream from "../../components/community/Scream";
// import StaticProfile from "../../components/profile/StaticProfile";
import Profile from "../../components/profile/Profile";
// Util
import ProfileSkeleton from "../../util/ProfileSkeleton";
// Redux Axios
import { connect } from "react-redux";
import { getUserData } from "../../redux/actions/dataActions";
import axios from "axios";
// Image
// import {NoImg} from "../../assets/images/no-img.png";
const styles = (theme) => ({
  ...theme.spread,
});
class user extends Component {
  state = {
    profile: null,
    screamIdParam: null,
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const screamId = this.props.match.params.screamId;

    if (screamId) this.setState({ screamIdParam: screamId });

    this.props.getUserData(handle);
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
    // const { screams, loading } = this.props.data;
    // const { screamIdParam } = this.state;

    // const screamsMarkup = loading ? (
    //   <Skeleton image={NoImg}/>
    // ) : screams === null ? (
    //   <p>No screams from this user</p>
    // ) : !screamIdParam ? (
    //   screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    // ) : (
    //   screams.map((scream) => {
    //     if (scream.screamId !== screamIdParam)
    //       return <Scream key={scream.screamId} scream={scream} />;
    //     else return <Scream key={scream.screamId} scream={scream} openDialog />;
    //   })
    // );
    const { classes } = this.props;
    return (
      <div className={classes.adjustTop}>
        <Grid container spacing={10}>
          {/* <Grid item sm={8} xs={12}>
            {screamsMarkup}
          </Grid> */}
          <Grid item sm={4} xs={12}>
            {this.state.profile === null ? (
              <ProfileSkeleton />
            ) : (
              // <StaticProfile profile={this.state.profile} />
              <Profile />
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

user.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getUserData })(
  withStyles(styles)(user)
);
