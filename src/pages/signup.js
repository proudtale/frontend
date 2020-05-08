import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// MUI Core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

// Redux
import { connect } from "react-redux";
import { signupUser } from "../redux/actions/userActions";
import { Checkbox, FormControlLabel } from "@material-ui/core";
// Images
import AppIcon from "../assets/images/proudtale.png";

const styles = (theme) => ({
  ...theme.spread,
  // registerStyle: {
  //   background: "white",
  //   padding: "2em",
  //   borderRadius: "1em",
  //   marginTop: "3em",
  // },
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

class signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      handle: "",
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
    this.setState({
      loading: true,
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle,
    };
    this.props.signupUser(newUserData, this.props.history);
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
            <img src={AppIcon} alt="proudtale" className={classes.image} />
            <Typography variant="h4" className={classes.pageTitle}>
              Create a new account
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
              />
              <TextField
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                variant="outlined"
                className={classes.textField}
                helperText={errors.confirmPassword}
                error={errors.confirmPassword ? true : false}
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="handle"
                name="handle"
                type="text"
                label="Handle"
                variant="outlined"
                className={classes.textField}
                helperText={errors.handle}
                error={errors.handle ? true : false}
                value={this.state.handle}
                onChange={this.handleChange}
                fullWidth
              />
              {errors.general && (
                <Typography variant="body2" className={classes.customError}>
                  {errors.general}
                </Typography>
              )}
              <FormControlLabel
                control={<Checkbox color="primary" name="agreement" />}
                value="I agree"
                label="I agree to the Proudtale Agreement"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className={classes.button}
                disabled={loading}
              >
                Create account
                {loading && (
                  <CircularProgress size={30} className={classes.progress} />
                )}
              </Button>
              <Box className={classes.signupLink}>
                <span>
                  <Link to="/login">Already have an account ? Log in</Link>
                </span>
              </Box>
            </form>
          </Grid>
          <Grid item sm />
        </Grid>
      </Paper>
    );
  }
}

signup.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

export default connect(mapStateToProps, { signupUser })(
  withStyles(styles)(signup)
);
