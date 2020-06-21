/**
 * Copyright (c) 2020 proudtale
 * All rights reserved.
 *
 * Filename: bookCard.js
 *
 * Key Options:
 * - set a valid value for [this booktitle]
 *
 * Revision History:
 * - 22 MAR 2020, Marko Tanuan <markotanuan@proudtale.ca> : Created
 * - 17 MAY 2020, Sidney Wittman <sidney.wittman@proudtale.com> : Refactor to a separate js file
 *
 */

import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";
//Components
import DeleteBook from "./DeleteBook";
import FinalCompleteDialog from "./FinalCompleteDialog";
// Util
import MyButton from "../../util/MyButton";
import YesNoDialog from "../../util/YesNoDialog";
import ProudtaleDialog from "../../util/ProudtaleDialog";
import {
  formatStringThumbnail,
  formatStringReplaceHtmltag,
} from "../../util/helpers";
import ProudtaleExpansionPanel from "../../util/ProudtaleExpansionPanel";
// MUI Core
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
// import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

// Icons
import EditIcon from "@material-ui/icons/Edit";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// Redux
import { connect } from "react-redux";
// Image
import { uploadBookImage, getBook } from "../../redux/actions/bookActions";
import Proudtalelogo from "../../assets/images/proudtalelogobgwhite.png";
const styles = {
  root: {
    maxWidth: "15em",
    maxHeight: "27em",
    position: "relative",
    display: "flex",
    margin: "0.3em 0.5em 0.5em 3em",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  card: {
    width: "15em",
  },
  cardContentBox1: {
    height: "7.8em",
    "& div": {
      display: "flex",
      justifyContent: "left",
      "& h6": {
        padding: "0.2em",
      },
    },
  },
  cardContentBox2: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "0.3em",
    "& button": {
      padding: "0",
    },
  },
  image: {
    minWidth: "12em",
    minHeight: "16em",
  },
  title: {
    fontSize: "1.2em",
  },
  createdat: {
    color: "#00d9fd",
    textAlign: "left",
    fontWeight: "bold",
  },
  editbtn: {
    display: "inline",
    "& label": {
      cursor: "pointer",
    },
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
  },
  tooltip: {
    fontSize: "1.4em",
    backgroundColor: "#1c2a48",
  },
  input: {
    display: "none",
  },
  wirtechapter: {
    color: "#00d9fd",
  },
  complete: {
    color: "#f9a825",
  },
  mouseEnterBox: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "5em 1em 0 1em",
    "& div:nth-child(1)": {
      marginBottom: "1.5em",
      "& button": {
        border: "solid #FFFFFF",
        color: "#FFFFFF",
        "&:hover": {
          background: "rgba(17, 17, 17, 0.5)",
        },
      },
    },
    "& div:nth-child(2)": {
      "& button": {
        border: "solid #f9a825",
        color: "#f9a825",
        "&:hover": {
          background: "rgba(17, 17, 17, 0.5)",
        },
      },
    },
  },
  completeButton: {
    background: "rgba(242, 133, 0)",
    color: "#ffff",
    marginRight: "1em",
    "&:hover": {
      background: "rgba(242, 133, 0)",
    },
  },
  backButton: {
    background: "rgba(128, 128, 128)",
    color: "#ffff",
    "&:hover": {
      background: "rgba(128, 128, 128)",
    },
  },
  exportButton: {
    background: "rgba(242, 133, 0)",
    color: "#ffff",
    margin: "1.3em 0 1.3em 1em",
    "&:hover": {
      background: "rgba(242, 133, 0)",
    },
  },
  completeDialogImage: {
    marginLeft: "24px",
    width: "calc(15% - 70px)",
    borderRadius: "50%",
  },
  secondCompleteDialogImage: {
    marginLeft: "24px",
    width: "calc(15% - 24px)",
    borderRadius: "50%",
  },
  bookCover: {
    "& img ": {
      width: "20em",
      height: "25em",
      margin: "1em",
      boxShadow: "1px 1px 1px 1px rgba(255,255,255, 0.5)",
    },
  },
  bookInfo: {
    marginLeft: "0.4em",
  },
  desc: {
    height: "12em",
    wordWrap: "break-word",
    overflowY: "auto",
    marginBottom: "0.5em",
  },
};

const dummyChapters = [
  {
    chapterTitle: "Proudtale.com",
  },
  {
    chapterTitle: "proudtale member",
  },
  {
    chapterTitle: "Enjoy proudtale",
  },
  {
    chapterTitle: "Awesome proudtale and team",
  },
];
class BookCard extends Component {
  state = {
    editDialogOpen: false,
    completeDialog: false,
    secondCompleteDialog: false,
    bookCardMediaMouseInside: false,
    finalCompleteDialog: false,
  };
  handleEditDialogOpen = (e) => {
    this.setState({ editDialogOpen: true });
    console.log(e.currentTarget.nextSibling);
  };
  handleEditDialogClose = () => {
    this.setState({ editDialogOpen: false });
  };
  handleCompleteDialogOpen = () => {
    this.setState({ completeDialog: true });
  };
  handleCompleteDialogClose = () => {
    this.setState({ completeDialog: false });
  };
  handleSecondCompleteDialogOpen = () => {
    this.setState({ secondCompleteDialog: true });
  };
  handleSecondCompleteDialogClose = () => {
    this.setState({ secondCompleteDialog: false });
  };
  handleBookImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.uploadBookImage(
      formData,
      this.props.book.bookId,
      this.props.book.userHandle
    );
  };
  handleAgree = (e) => {
    this.props.getBook(this.props.book.bookId);
    this.props.history.push(`/book/${this.props.book.bookId}/chapter`);
  };
  bookCardMediaMouseEnter = () => {
    this.setState({ bookCardMediaMouseInside: true });
  };
  bookCardMediaMouseLeave = () => {
    this.setState({ bookCardMediaMouseInside: false });
  };
  handleFinalCompleteDialogOpen = () => {
    this.setState({ finalCompleteDialog: true });
    this.handleSecondCompleteDialogClose();
  };
  handleFinalCompleteDialogClose = (propsParameter) => {
    this.setState({ finalCompleteDialog: propsParameter });
  };
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      book: {
        title,
        createdAt,
        userImage,
        userHandle,
        bookId,
        bookImageUrl,
        bookCompleted,
        desc,
      },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteBook bookId={bookId} title={title} />
      ) : null;
    const editDialog = (
      <YesNoDialog
        handleClose={this.handleEditDialogClose}
        open={this.state.editDialogOpen}
        title={title}
        dialogTitle={<div>Confirm writing the chapter</div>}
        onClick={this.handleAgree}
      >
        <p>
          Do you want to proceed with writing chapters of
          <span className={classes.wirtechapter}>{title}</span> ?
        </p>
      </YesNoDialog>
    );
    const secondCompleteDialog = (
      <ProudtaleDialog
        open={this.state.secondCompleteDialog}
        title={title}
        onClick={this.handleSecondCompleteDialogClose}
        dialogTitle={<div>Confirm completing book</div>}
        dialogActions={
          <Box>
            <Button
              className={classes.completeButton}
              onClick={this.handleFinalCompleteDialogOpen}
            >
              Complete
            </Button>
            <Button
              className={classes.backButton}
              onClick={this.handleSecondCompleteDialogClose}
            >
              Back
            </Button>
          </Box>
        }
        maxWidth="sm"
        dialogImage={
          <img
            className={classes.secondCompleteDialogImage}
            alt="proudtale logo"
            src={Proudtalelogo}
          />
        }
      >
        <p>
          Would you like to complete
          <span className={classes.complete}> {title}</span>?
        </p>
      </ProudtaleDialog>
    );
    const completeDialog = (
      <ProudtaleDialog
        open={this.state.completeDialog}
        title={title}
        dialogTitle={<div>Complete Book</div>}
        dialogActions={
          <Box>
            <Button
              className={classes.completeButton}
              onClick={this.handleSecondCompleteDialogOpen}
            >
              Complete
            </Button>
            <Button
              className={classes.backButton}
              onClick={this.handleCompleteDialogClose}
            >
              Back
            </Button>
          </Box>
        }
        maxWidth="md"
        dialogImage={
          <img
            className={classes.completeDialogImage}
            alt="proudtale logo"
            src={Proudtalelogo}
          />
        }
      >
        <Box>
          <Typography component="p">
            Complete {title} with the current settings. Once you click “Publish”
            below, you won’t be able to edit this book.
          </Typography>
          <Button className={classes.exportButton}>Export</Button>
          <Box display="flex" justifyContent="space-between" margin="1em">
            <Box className={classes.bookCover}>
              <Typography variant="h6">Book cover</Typography>
              <CardMedia
                component="img"
                alt={`${title}'s cover`}
                image={bookImageUrl}
              />
            </Box>
            <Box className={classes.bookInfo}>
              <Typography variant="h6">Book Informatoin</Typography>
              <Box margin="1em">
                <Typography variant="body1">
                  <strong>Book title :</strong> {title}
                </Typography>
                <ProudtaleExpansionPanel
                  title="Chapter"
                  details={dummyChapters}
                />
                <Typography variant="body1">
                  <strong>Genre tags</strong>
                </Typography>
                <Typography variant="body1">
                  <strong>Synopsis</strong>
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  align="justify"
                  className={classes.desc}
                >
                  {formatStringReplaceHtmltag(desc)}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </ProudtaleDialog>
    );
    const bookCardMediaMouseEnter = (
      <Box className={classes.mouseEnterBox}>
        <Box>
          <Button onClick={this.handleEditDialogOpen} fullWidth={true}>
            Edit
          </Button>
        </Box>
        <Box>
          <Button onClick={this.handleCompleteDialogOpen} fullWidth={true}>
            Complete
          </Button>
        </Box>
      </Box>
    );
    return (
      <Typography component={"span"} className={classes.root}>
        <Fragment>
          <Card className={classes.card}>
            <CardMedia
              image={bookImageUrl}
              // title={title}
              className={classes.image}
              onMouseEnter={this.bookCardMediaMouseEnter}
              onMouseLeave={this.bookCardMediaMouseLeave}
            >
              {this.state.bookCardMediaMouseInside && bookCompleted === false
                ? bookCardMediaMouseEnter
                : null}
            </CardMedia>
            <CardContent>
              <Box className={classes.cardContentBox1}>
                <div>
                  <Avatar className={classes.avatar} src={userImage} />
                  <Typography component={"span"} variant="h6" gutterBottom>
                    {userHandle}
                  </Typography>
                </div>
                <Typography
                  component={"span"}
                  className={classes.createdat}
                  variant="body2"
                  color="textSecondary"
                >
                  {dayjs(createdAt).fromNow()}
                </Typography>
                <Tooltip
                  title={title}
                  placement="top-start"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Typography variant="body1" className={classes.title}>
                    {formatStringThumbnail(title)}
                  </Typography>
                </Tooltip>
              </Box>
              <Divider light />
              <Box className={classes.cardContentBox2}>
                <MyButton tip="Add book cover picture">
                  <Typography className={classes.editbtn}>
                    <label className="bookImageInput">
                      <input
                        className={classes.input}
                        type="file"
                        id="bookImageInput"
                        onChange={this.handleBookImageChange}
                      />
                      <EditIcon color="primary" />
                    </label>
                  </Typography>
                </MyButton>
                <Typography>{deleteButton}</Typography>
              </Box>
            </CardContent>
          </Card>
          {editDialog}
          {completeDialog}
          {secondCompleteDialog}
          <FinalCompleteDialog
            open={this.state.finalCompleteDialog}
            handleClose={this.handleFinalCompleteDialogClose}
            userImage={userImage}
            title={title}
            userHandle={userHandle}
            bookImage={bookImageUrl}
          />
        </Fragment>
      </Typography>
    );
  }
}
const mapActionsToProps = { uploadBookImage, getBook };

BookCard.propTypes = {
  uploadBookImage: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(withRouter(BookCard)));
