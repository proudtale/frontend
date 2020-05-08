import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// MUI Core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
// Redux stuff
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";
// Images
import AppIcon from "../assets/images/proudtale.png";

const styles = (theme) => ({
  ...theme.spread,
  paper: {
    borderRadius: "1em",
    padding: "4em",
    margin: "auto",
    marginTop: "10em",
    maxWidth: 700,
    boxShadow: "none",
  },
  signupLink: {
    marginTop: "1em",
  },
});

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, this.props.history);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;

    return (
      <Paper className={classes.paper}>
        <Grid container className={classes.form}>
          <Grid item xs={12}>
            <img src={AppIcon} alt="proudtalelog" className={classes.image} />
            <Typography variant="h4" className={classes.pageTitle}>
              Log in
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
              <TextField
                id="email"
                name="email"
                type="email"
                label="Email"
                variant="outlined"
                className={classes.textField}
                helperText={errors.email}
                error={errors.email ? true : false}
                value={this.state.email}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="password"
                name="password"
                type="password"
                label="Password"
                variant="outlined"
                className={classes.textField}
                helperText={errors.password}
                error={errors.password ? true : false}
                value={this.state.password}
                onChange={this.handleChange}
                fullWidth
                mb="2em"
              />
              {errors.general && (
                <Typography variant="body2" className={classes.customError}>
                  {errors.general}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className={classes.button}
                disabled={loading}
              >
                Log in
                {loading && (
                  <CircularProgress size={30} className={classes.progress} />
                )}
              </Button>
              <Box className={classes.signupLink}>
                <span>
                  <Link to="/signup">
                    Don't have an account ? Create account
                  </Link>
                </span>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  loginUser,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(login));
