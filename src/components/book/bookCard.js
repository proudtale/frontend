import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";

//Components
import DeleteBook from "./DeleteBook";
// import EditBook from "./EditBook";
// Util
import MyButton from "../../util/MyButton";

// MUI Core
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
// Icons
import EditIcon from "@material-ui/icons/Edit";

// Redux
import { connect } from "react-redux";
// Image
import Proudtalelogo from "../../assets/images/proudtalelogo.png";
import { uploadBookImage } from "../../redux/actions/bookActions";

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
  dialogDiv: {
    display: "flex",
  },
  dialogTitle: {
    textAlign: "center",
  },
  dialogContent: {
    display: "flex",
    "& span": {
      color: "blue",
    },
    "& p": {
      fontSize: "1.1em",
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
};

class BookCard extends Component {
  state = {
    open: false,
  };
  handleOpen = (e) => {
    this.setState({ open: true });
    console.log(e.currentTarget.nextSibling);
  };
  handleClose = () => {
    this.setState({ open: false });
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
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      book: { title, createdAt, userImage, userHandle, bookId, bookImageUrl },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteBook bookId={bookId} title={title} />
      ) : null;

    // const editButton =
    //   authenticated && userHandle === handle ? (
    //     <EditBook bookId={bookId} userHandle={userHandle}/>
    //   ) : null;
    const confirmDialog = (
      <Fragment>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
          scroll="body"
          aria-labelledby="customized-dialog-title"
        >
          <div className={classes.dialogDiv}>
            <img alt="proudtale logo" src={Proudtalelogo} />
            <div>
              <DialogTitle
                id="customized-dialog-title"
                className={classes.dialogTitle}
              >
                Proudtale Confirmation Dialog
              </DialogTitle>
              <DialogContent className={classes.dialogContent}>
                <p>
                  Do you want to proceed with writing chapters of{" "}
                  <span>{title}</span> ?
                </p>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Yes
                </Button>
                <Button onClick={this.handleClose} color="secondary">
                  No
                </Button>
              </DialogActions>
            </div>
          </div>
        </Dialog>
      </Fragment>
    );
    return (
      <Typography className={classes.root}>
        <Fragment>
          <Card className={classes.card}>
            <Link onClick={this.handleOpen}>
              <CardMedia
                image={bookImageUrl}
                title={title}
                className={classes.image}
              />
            </Link>
            <CardContent>
              <Box className={classes.cardContentBox1}>
                <div>
                  <Avatar className={classes.avatar} src={userImage} />
                  <Typography
                    className={"MuiTypography--heading"}
                    variant="h6"
                    gutterBottom
                  >
                    Author {userHandle}
                  </Typography>
                </div>
                <Typography
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
                    {title.slice(0, 25)}
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
                  {/* {editButton} */}
                </MyButton>
                <Typography>{deleteButton}</Typography>
              </Box>
            </CardContent>
          </Card>
          {confirmDialog}
        </Fragment>
      </Typography>
    );
  }
}
const mapActionsToProps = { uploadBookImage };

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
)(withStyles(styles)(BookCard));
