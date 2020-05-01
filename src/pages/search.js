import React, { Component } from "react";

// Components
import Scream from "../components/community/Scream";
// Util
import ScreamSkeleton from "../util/ScreamSkeleton";
// Redux
import { searchScreams, getScreams } from "../redux/actions/dataActions";
import { connect } from "react-redux";
// MUI Core
import { Typography } from "@material-ui/core";

class search extends Component {
  state = {
    value: this.props.match.params.searchValue,
  };
  componentWillMount() {
    this.props.searchScreams(this.state.value, this.props.data.screams);
  }

  componentWillReceiveProps(newProps) {
    const searchValue = this.props.match.params.searchValue;
    if (newProps.match.params.searchValue !== searchValue) {
      this.setState({ value: searchValue });
      this.props.searchScreams(searchValue, this.props.data.screams);
    }
  }

  render() {
    const { filteredScreams, loading } = this.props.data;
    let recentScreamsMarkup = !loading ? (
      filteredScreams.length < 1 ? (
        <Typography variant="h6"> No results</Typography>
      ) : (
        filteredScreams.map((scream) => (
          <Scream key={scream.screamId} scream={scream} />
        ))
      )
    ) : (
      <ScreamSkeleton />
    );
    return (
      <div>
        <Typography variant="h4">Results for {this.state.value}</Typography>
        {recentScreamsMarkup}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapActionsToProps = {
  searchScreams,
  getScreams,
};

export default connect(mapStateToProps, mapActionsToProps)(search);
