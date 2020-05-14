import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import Scream from "../../components/community/Scream";
import Profile from "../../components/profile/Profile";
import PostScream from "../../components/community/PostScream";
// Util
import ScreamSkeleton from "../../util/ScreamSkeleton";
// MUI Core
import Grid from "@material-ui/core/Grid";

// Redux
import { connect } from "react-redux";
import { getScreams } from "../../redux/actions/dataActions";

class community extends Component {
  componentDidMount() {
    this.props.getScreams();
  }
  render() {
    const { screams, loading } = this.props.data;
    let recentScreamsMarkup = !loading ? (
      screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <ScreamSkeleton />
    );
    return (
      <React.Fragment>
        <PostScream />
        <Grid container spacing={10}>
          <Grid item sm={8} xs={12}>
            {recentScreamsMarkup}
          </Grid>
          <Grid item sm={4} xs={12}>
            <Profile />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

community.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getScreams })(community);
