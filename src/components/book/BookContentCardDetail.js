import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

// MUI Stuff
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
// import Divider from "@material-ui/core/Divider";

// Component
import CopyrightDialog from "./copyrightDialog";
// MUI Icon
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import ReplyIcon from "@material-ui/icons/Reply";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
// Util
import MyButton from "../../util/MyButton";

// Image
const styles = (theme) => ({
  ...theme.spread,
  infoButton: {
    padding: "0",
    color: "#1c2a48",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialogContent: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 2.5em 2.5em 2.5em",
  },
  bookCover: {
    width: "20em",
    "& img": {
      width: "20em",
      height: "25em",
      boxShadow: "5px 5px 5px rgba(0,0,0,0.3)",
      borderRadius: "2px",
    },
  },
  bookContent: {
    width: "20em",
    margin: "1em 0 0 1em",
  },
  bookContentText: {
    maxHeight: "21.5em",
    "& h6": {
      fontSize: "0.9em",
      wordWrap: "break-word",
      marginBottom: "1.4em",
      maxHeight: "2.5em",
      // overflowY: "auto"
    },
    "& p": {
      height: "10em",
      wordWrap: "break-word",
      overflowY: "auto",
      marginBottom: "0.5em",
    },
  },
  bookContentAuthor: {
    display: "flex",
    justifyContent: "end",
    "& span": {
      padding: "0.4em 0 0 0.4em",
    },
  },
  readmoreButton: {
    border: "solid #1c2a48",
    color: "#1c2a48",
    fontWeight: "bold",
    margin: "0",
    width: "100%",
    "&:hover": {
      background: "#1c2a48",
      color: "white",
    },
  },
  bookContentButton: {
    marginTop: "0.5em",
  },
  bookContentComment: {
    marginTop: "0.3em",
    marginBottom: "-1.2em",
  },
  iconParent: {
    margin: "0 1rem",
    display: "inline-flex",
    verticalAlign: "middle",
  },
});

class BookContentCardDetail extends Component {
  state = {
    open: false,
  };
  handleOpen = (e) => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <MyButton
          tip="Learn more"
          onClick={this.handleOpen}
          btnClassName={classes.infoButton}
        >
          <InfoIcon />
        </MyButton>
        <Dialog
          className={classes.dialog}
          open={this.state.open}
          onClose={this.handleClose}
          // fullWidth
          maxWidth="52em"
          scroll="body"
          aria-labelledby="yes-no-dialog"
        >
          <DialogTitle>
            <MyButton
              tip="Close"
              onClick={this.handleClose}
              tipClassName={classes.closeButton}
              ml={20}
            >
              <CloseIcon />
            </MyButton>
          </DialogTitle>
          <DialogContent diviers className={classes.dialogContent}>
            <Box className={classes.bookCover}>
              <CardMedia
                component="img"
                alt={`${this.props.title}'s cover`}
                image={this.props.bookImage}
              />
            </Box>
            <Box
              className={classes.bookContent}
              display="flex"
              flexDirection="column"
            >
              <Box className={classes.bookContentText}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  align="center"
                >
                  {this.props.title}
                </Typography>
                <Box className={classes.bookContentAuthor}>
                  <Avatar src={this.props.userImage} />
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="span"
                    color="primary"
                  >
                    {this.props.author}
                  </Typography>
                </Box>
                <Grid container className={classes.bookContentComment}>
                  <span className={classes.iconParent}>
                    <ReplyIcon className={classes.icon} color="primary" /> 3
                  </span>
                  <span className={classes.iconParent}>
                    <InsertCommentIcon
                      className={classes.icon}
                      color="primary"
                    />{" "}
                    3
                  </span>
                  <span className={classes.iconParent}>
                    <ImportContactsIcon
                      className={classes.icon}
                      color="primary"
                    />{" "}
                    3
                  </span>
                </Grid>
                <br />
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="span"
                  color="primary"
                  align="left"
                >
                  Synopsis
                </Typography>
                <br />
                <Typography
                  gutterBottom
                  variant="body1"
                  component="p"
                  align="center"
                >
                  {this.props.desc}
                </Typography>
                <CopyrightDialog />
              </Box>
              <Box
                className={classes.bookContentButton}
                display="flex"
                justifyContent="center"
              >
                <Button className={classes.readmoreButton} color="primary">
                  Read More
                </Button>
              </Box>
            </Box>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}
export default withStyles(styles)(BookContentCardDetail);
