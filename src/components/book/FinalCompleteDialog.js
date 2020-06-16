import React, { Component } from "react";

// Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// Material UI Icon
import CloseIcon from "@material-ui/icons/Close";
// Util
import MyButton from "../../util/MyButton";
//images
import proudtaleCongratulation from "../../assets/images/proudtaleCongratulation.png";
import proudtaleCheck from "../../assets/images/proudtaleCheck.png";
const styles = (theme) => ({
  root: {
    padding: "1.2em",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    "& img": {
      width: "45%",
      height: "9em",
    },
  },
  authorCard: {
    margin: "1em 0 1.5em 0",
    padding: "1em",
    display: "flex",
    justifyContent: "left",
    "& h6": {
      padding: "1em 0 0 1em",
    },
  },
  authorCardProudtaleCheck: {
    width: "4em",
  },
  avatar: {
    display: "inline-block",
    margin: "0.7em 0 0 0.7em",
  },
  bookCard: {
    marginBottom: "1.5em",
    padding: "1em",
    display: "flex",
    justifyContent: "left",
    "& h6:nth-child(1)": {
      color: "#f9a825",
      fontSize: "1.3em",
    },
    "& h6:nth-child(2)": {
      color: "black",
      fontSize: "1.2em",
    },
    "& img": {
      width: "4em",
      marginRight: "1em",
    },
  },
  noticeCard: {
    marginBottom: "1.5em",
    padding: "1em",
    display: "flex",
    justifyContent: "left",
    "& p": {
      fontSize: "1.2em",
      color: "#f44336",
    },
    "& img": {
      width: "4em",
      marginRight: "1em",
    },
  },
  completeBook: {
    padding: "1.2em 3.5em 1.2em 3.5em",
  },
  completeBookImage: {
    width: "20em",
    "& img": {
      width: "20em",
      height: "25em",
      boxShadow: "2px 2px 2px 2px rgba(3, 0, 55, 0.47)",
      borderRadius: "2px",
    },
  },
  completeButton: {
    width: "20em",
    margin: "0 0 0 5em",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& div:nth-child(1)": {
      marginBottom: "1.2em",
      "& button": {
        border: "solid #f9a825",
        color: "#f9a825",
        fontSize: "1.1em",
        marginBottom: "3em",
        "&:hover": {
          background: "#f9a825",
          color: "#ffff",
        },
      },
    },
    "& div:nth-child(2)": {
      "& button": {
        border: "solid #030037",
        color: "#030037",
        fontSize: "1.1em",
        "&:hover": {
          background: "#030037",
          color: "#ffff",
        },
      },
    },
  },
});
class FinalCompleteDialog extends Component {
  handleClose = () => {
    this.props.handleClose(false);
  };
  render() {
    const { classes, open } = this.props;
    return (
      <Dialog open={open} fullWidth maxWidth="md" scroll="body">
        <Box className={classes.root}>
          <Box className={classes.dialogTitle}>
            <img
              className="logo"
              alt="proudtale logo"
              src={proudtaleCongratulation}
            />
            <MyButton
              tip="Close"
              onClick={this.handleClose}
              tipClassName={classes.closeButton}
              ml={20}
            >
              <CloseIcon />
            </MyButton>
          </Box>
          <DialogContent>
            <Card className={classes.authorCard}>
              <Box>
                <img
                  className={classes.authorCardProudtaleCheck}
                  alt="proudtale check"
                  src={proudtaleCheck}
                />
              </Box>
              <Box display="flex">
                <Avatar className={classes.avatar} src={this.props.userImage} />
                <Typography variant="h6">{this.props.title}</Typography>
              </Box>
            </Card>
            <Card className={classes.bookCard}>
              <Box>
                <img alt="proudtale check" src={proudtaleCheck} />
              </Box>
              <Box>
                <Typography variant="subtitle1">
                  You are permanently completing your book!
                </Typography>
                <Typography variant="subtitle1">
                  {this.props.title} By {this.props.userHandle}
                </Typography>
              </Box>
            </Card>
            <Card className={classes.noticeCard}>
              <Box>
                <img alt="proudtale check" src={proudtaleCheck} />
              </Box>
              <Box>
                <Typography variant="body1">
                  Once you click "complete" you will lose the ability to edit
                  this version, you can still come back later and make an
                  updated version of the completed work later.
                </Typography>
              </Box>
            </Card>
            <Box className={classes.completeBook} display="flex">
              <Box className={classes.completeBookImage}>
                <CardMedia
                  component="img"
                  alt={`${this.props.title}'s cover`}
                  image={this.props.bookImage}
                />
              </Box>
              <Box className={classes.completeButton}>
                <Box>
                  <Button onClick={this.handleComplete} fullWidth={true}>
                    Complete
                  </Button>
                </Box>
                <Box>
                  <Button onClick={this.handleClose} fullWidth={true}>
                    Back
                  </Button>
                </Box>
              </Box>
            </Box>
          </DialogContent>
        </Box>
      </Dialog>
    );
  }
}
export default withStyles(styles)(FinalCompleteDialog);