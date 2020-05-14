import React from "react";
// import PropTypes from "prop-types";

import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import InsertCommentIcon from "@material-ui/icons/InsertComment";
import ReplyIcon from "@material-ui/icons/Reply";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";

import { makeStyles } from "@material-ui/core/styles";
import Pill from "../../util/Pill";

const useStyles = makeStyles((theme) => ({
  ...theme.spread,
  root: {
    width: "100%",
  },
  media: {
    width: 300,
  },
  title: {
    fontWeight: 500,
  },
  iconParent: {
    margin: "0 1rem",
    display: "inline-flex",
    verticalAlign: "middle",
  },
  icon: {
    marginRight: "7px",
  },
  progress: {
    maxHeight: "35px",
    padding: theme.spacing(0, 4),
  },
  blackText: {
    color: "rgb(0, 0, 0) !important",
  },
  tag: {
    margin: "0 8px 0 0",
    padding: theme.spacing(0, 4),
  },
  username: {
    fontSize: "2rem",
    fontWeight: "300",
  },
}));

export default function BookInfo() {
  const classes = useStyles();
  return (
    <Grid container direction="column" alignItems="center" spacing={3}>
      <Grid
        className={classes.root}
        justify="center"
        container
        spacing={4}
        wrap="wrap"
        item
      >
        <Grid item>
          <img
            className={classes.media}
            src="https://marketplace.canva.com/EADaiVGpN7g/1/0/1003w/canva-red-sushi-japanese-cooking-recipe-ebook-cover-cN1LLwUwKqM.jpg"
            alt="Book Cover"
          />
        </Grid>

        <Grid item xs={6} container>
          <Grid
            className={classes.bookInfo}
            item
            container
            direction="column"
            justify="space-around"
          >
            <Grid item>
              <Grid container justify="space-between">
                <Typography variant="h2" classes={{ h2: classes.title }}>
                  Name of Book
                </Typography>
                <Pill
                  classes={{
                    root: classes.progress,
                    disabled: classes.blackText,
                  }}
                  label="completed"
                  color="#ABFFC8"
                  disabled
                />
              </Grid>
              <CardHeader
                avatar={
                  <img
                    className="profile-image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1024px-Cat03.jpg"
                  />
                }
                title="username1"
                subheader="September 14, 2016"
                classes={{ title: classes.username }}
              />
              <Grid container>
                <span className={classes.iconParent}>
                  <ReplyIcon className={classes.icon} /> 3
                </span>
                <span className={classes.iconParent}>
                  <InsertCommentIcon className={classes.icon} /> 3
                </span>
                <span className={classes.iconParent}>
                  <ImportContactsIcon className={classes.icon} /> 3
                </span>
              </Grid>
            </Grid>
            <Grid item>
              {["nonfiction", "cooking"].map((v) => (
                <Pill className={classes.tag} label={v} color="#F1F1F1" />
              ))}
            </Grid>
            <Grid item>
              <Typography variant="body2" component="p">
                Continue As:
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Button fullWidth variant="contained" color="primary">
                    eBook
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button fullWidth variant="outlined" color="primary">
                    Audio Book
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container justify="center">
        <Grid item xs={8}>
          <Typography variant="h4" component="h3">
            Synopsis
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
          <Typography component="a"> Copyright Details</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

// BookInfo.propTypes = {
//   book: PropTypes.object,
// };
