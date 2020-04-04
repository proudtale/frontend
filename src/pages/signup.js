import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../images/icon.png";
import { Link } from "react-router-dom";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
// Redux stuff
import { connect } from "react-redux";
import { signupUser } from "../redux/actions/userActions";
import { Checkbox, FormControlLabel, FormHelperText } from "@material-ui/core";

const styles = (theme) => ({
  ...theme.spread,
  registerStyle: {
    background: "white",
    padding: "2em",
    borderRadius: "1em",
    marginTop: "3em",
  },
  centerText: {
    textAlign: "center",
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
    let checkBox = document.getElementsByName("agreement")[0];
    console.log(checkBox.checked);
    if (checkBox.checked === true) {
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
    } else {
      this.setState({
        errors: { checkBox: true },
      });
    }
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
      <div className={classes.registerStyle}>
        <Grid container className={classes.form}>
          <Grid item sm />
          <Grid item sm>
            <img src={AppIcon} alt="proudtale" className={classes.image} />
            <Typography variant="h4" className={classes.pageTitle}>
              Register
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
              <TextField
                id="email"
                name="email"
                type="email"
                label="Email"
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
              {this.state.errors.checkBox ? (
                <FormHelperText className={classes.centerText} error={true}>
                  You must agree to the terms and conditions!
                </FormHelperText>
              ) : null}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={loading}
              >
                Register
                {loading && (
                  <CircularProgress size={30} className={classes.progress} />
                )}
              </Button>
              <br />
              <small>
                Already have an account ? Login <Link to="/login">here</Link>
              </small>
            </form>
          </Grid>
          <Grid item sm />
        </Grid>
      </div>
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
