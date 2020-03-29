import React from "react";
import { Link, useHistory } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";

function Searchbar(props) {
  const { classes, screams } = props;
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    inputValue,
  } = useAutocomplete({
    id: "search-hook",
    options: screams,
    getOptionLabel: (scream) => scream.title,
  });
  let history = useHistory();

  const handleKeyPress = (e, name) => {
    if (e.key === "Enter") {
      history.push(`/search/${name}`);
    }
  };

  return (
    <div>
      <div className={classes.search} {...getRootProps()}>
        <Link to="/search">
          <label className={classes.searchIcon} {...getInputLabelProps()}>
            <SearchIcon />
          </label>
        </Link>
        <InputBase
          classes={{ root: classes.inputRoot, input: classes.inputInput }}
          {...getInputProps()}
          onKeyPress={(e) => handleKeyPress(e, inputValue)}
        />
        <Link to={`/search/${inputValue}`}>
          <Button className={classes.button}>Search</Button>
        </Link>
      </div>

      {groupedOptions.length > 0 ? (
        <ul className={classes.listBox} {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option.title}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

const styles = (theme) => ({
  ...theme.spread,
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgba(255,255,255,0.15)",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.20)",
    },
    marginLeft: 0,
    marginRight: "1rem",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: "0px 1rem",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    marginLeft: "3rem",
  },
  inputInput: {
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  listBox: {
    width: "300px",
    margin: "2px 0 0",
    padding: 0,
    position: "absolute",
    listStyle: "none",
    backgroundColor: "#fff",
    overflow: "auto",
    maxHeight: "250px",
    borderRadius: "4px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    zIndex: 1,
    color: "black",
    "& li": {
      padding: "5px 12px",
      display: "flex",

      "& span": {
        flexGrow: 1,
      },

      "& svg": {
        color: "transparent",
      },
    },

    "& li[aria-selected='true']": {
      backgroundColor: "#fafafa",
      fontWeight: "600",

      "& svg": {
        color: "#1890ff",
      },
    },

    "& li[data-focus='true']": {
      backgroundColor: "#e6f7ff",
      cursor: "pointer",

      "& svg": {
        color: "#000",
      },
    },
  },
  button: {
    color: "white",
  },
});

const mapStateToProps = (state) => ({
  screams: state.data.screams,
});

export default connect(mapStateToProps)(withStyles(styles)(Searchbar));
