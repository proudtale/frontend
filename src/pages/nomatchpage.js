import React, { Component } from "react";
// MUI Core
import withStyles from "@material-ui/core/styles/withStyles";
// Images
import proudtale404 from "../assets/images/proudtale404.png";

const styles = (theme) => ({
  ...theme.spread,
  nomatchContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10em",
    "& div:nth-child(2)": {
      marginLeft: "2em",
    },
    "& img": {
      width: "22em",
    },
  },
  nomatchContainertext: {
    marginTop: "5em",
    "& div:nth-child(1)": {
      display: "flex",
    },
    "& h2:nth-child(1)": {
      color: "#1c2a48",
      fontWeight: "bolder",
      fontSize: "3.5em",
    },
    "& h5": {
      marginTop: "1em",
      color: "#1c2a48",
      fontSize: "2em",
    },
    "& p": {
      marginTop: "1em",
      fontSize: "1.7em",
      color: "#1c2a48",
    },
  },
  "@media (max-width: 640px)": {
    nomatchContainer: {
      flexDirection: "column-reverse",
      "& img": {
        width: "17em",
      },
    },
    nomatchContainertext: {
      marginTop: "0.1em",
    },
  },
});
export default withStyles(styles)(
  class nomatchpage extends Component {
    render() {
      const { classes } = this.props;
      const path = this.props.location.pathname;
      return (
        <div className={classes.nomatchContainer}>
          <div className={classes.nomatchContainertext}>
            <div>
              <h2>proudtale.com</h2>
            </div>
            <h5>
              <strong>404.</strong> That's an error.
            </h5>
            <p>The requested URL{path} was not found on this server</p>
          </div>
          <div>
            <img src={proudtale404} alt="proudtale 404" width="300" />
          </div>
        </div>
      );
    }
  }
);
