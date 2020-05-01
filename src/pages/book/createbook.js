import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import Scream from "../../components/community/Scream";
// import PostScream from "../components/scream/PostScream";
import PostBook from "../../components/book/PostBook";
// Util
import ScreamSkeleton from "../../util/ScreamSkeleton";
// MUI Core
import Grid from "@material-ui/core/Grid";
// Redux
import { connect } from "react-redux";
import { getScreams } from "../../redux/actions/dataActions";

class bookreview extends Component {
  componentDidMount() {
    this.props.getScreams();
  }
  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { screams, loading } = this.props.data;
    let recentScreamsMarkup = !loading ? (
      screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <ScreamSkeleton />
    );
    return (
      <div>
        <PostBook />
        <Grid container spacing={16}>
          <Grid item sm={8} xs={12}>
            {recentScreamsMarkup}
          </Grid>
          <Grid item sm={4} xs={12}></Grid>
        </Grid>
      </div>
    );
  }
}

bookreview.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getScreams })(bookreview);
