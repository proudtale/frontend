import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import SearchIcon from "@material-ui/icons/Search";

import { connect } from "react-redux";

const styles = (theme) => ({
  ...theme.spread,
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgba(255,255,255,0.15)",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.20)",
    },
    width: "50%",
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: 2,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
});

function Searchbar(props) {
  const { classes, screams } = props;
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "search-hook",
    options: screams,
    getOptionLabel: (scream) => scream.title,
  });

  console.log(screams);
  return (
    <div {...getRootProps()} className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        {...getInputProps()}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />

      {groupedOptions.length > 0 ? (
        <ul id="listOfTitles" {...getListboxProps()}>
          {screams.map((scream, index) => (
            <li {...getOptionProps({ scream, index })}>{scream.title}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  screams: state.data.screams,
});

export default connect(mapStateToProps)(withStyles(styles)(Searchbar));
