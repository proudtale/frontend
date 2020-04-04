import React, { useState } from "react";
import { Link } from "react-router-dom";
import Notifications from "../components/layout/Notifications";

import Box from "@material-ui/core/Box";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuList: {
    backgroundColor: "#1c2a48",
    color: "white",
  },
  menuItem: {
    color: "inherit",
  },
}));
export default function MobileNavbar({ authenticated, logoutUser }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleLogout = () => {
    logoutUser();
    handleClick();
  };

  return (
    <Box display={{ xs: "block", sm: "none" }}>
      <Notifications tip="Notification" />
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Popper
        elevation={0}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        transition
      >
        <MenuList className={classes.menuList}>
          {authenticated ? (
            <React.Fragment>
              <Link to="/" className={classes.menuItem}>
                <MenuItem onClick={handleClick}>Home</MenuItem>
              </Link>
              <Link to="community" className={classes.menuItem}>
                <MenuItem onClick={handleClick}>Community</MenuItem>
              </Link>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link className={classes.menuItem} to="/" onClick={handleClick}>
                <MenuItem>Home</MenuItem>
              </Link>

              <Link
                className={classes.menuItem}
                to="login"
                onClick={handleClick}
              >
                <MenuItem>Login</MenuItem>
              </Link>
            </React.Fragment>
          )}
        </MenuList>
      </Popper>
    </Box>
  );
}
