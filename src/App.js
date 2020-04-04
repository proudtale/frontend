import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import jwtDecode from "jwt-decode";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";
// Components
import Navbar from "./components/layout/Navbar";
import themeObject from "./util/theme";
import AuthRoute from "./util/AuthRoute";
import Footer from "./components/layout/Footer";
// Pages
import home from "./pages/home";
import community from "./pages/community";
import login from "./pages/login";
import signup from "./pages/signup";
import user from "./pages/user";
import search from "./pages/search";

import axios from "axios";

const theme = createMuiTheme(themeObject);

axios.defaults.baseURL =
  "https://us-central1-socialape-aa1d6.cloudfunctions.net/api";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Navbar />
            <div className="home-page-container">
              <div className="container">
                <Switch>
                  <Route exact path="/" component={home} />
                  <Route exact path="/community" component={community} />
                  <AuthRoute exact path="/login" component={login} />
                  <AuthRoute exact path="/signup" component={signup} />
                  <Route exact path="/users/:handle" component={user} />
                  <Route
                    exact
                    path="/users/:handle/scream/:screamId"
                    component={user}
                  />
                  <Route
                    exact
                    path="/search/:searchValue"
                    component={search}
                  ></Route>
                  <Route exact path="/search" component={search}></Route>
                </Switch>
              </div>
            </div>
            <Footer />
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
