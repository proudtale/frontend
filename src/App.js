import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import jwtDecode from "jwt-decode";

// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
// Util
import themeObject from "./util/theme";
import AuthRoute from "./util/AuthRoute";
// Pages
import home from "./pages/home";
import community from "./pages/community/community";
import login from "./pages/login";
import signup from "./pages/signup";
import user from "./pages/profile/user";
import search from "./pages/search";
import publish from "./pages/book/publish";
import chapter from "./pages/chapter/chapter";
import nomatchpage from "./pages/nomatchpage";
import info from "./pages/book/info";

// Redux Axios
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";
// import { getBookData } from "./redux/actions/bookActions";
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
    // store.dispatch(getBookData());
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
              <Switch>
                <Route exact path="/" component={home} />
                <AuthRoute
                  exact
                  path="/contentcreation/:handle"
                  component={publish}
                />
                <AuthRoute exact path="/community" component={community} />
                <Route exact path="/login" component={login} />
                <Route exact path="/signup" component={signup} />
                <AuthRoute exact path="/users/:handle" component={user} />
                <AuthRoute
                  exact
                  path="/users/:handle/scream/:screamId"
                  component={user}
                />
                <Route exact path="/books/:bookId" component={info} />
                <AuthRoute
                  exact
                  path="/book/:bookId/chapter"
                  component={chapter}
                />
                <AuthRoute
                  exact
                  path="/book/:bookId/chapter/:chapterId"
                  component={chapter}
                />
                <Route
                  exact
                  path="/search/:searchValue"
                  component={search}
                ></Route>
                <Route exact path="/search" component={search}></Route>
                <Route component={nomatchpage} />
              </Switch>
            </div>
            <Footer />
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
