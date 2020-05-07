import React from "react";
// import PropTypes from "prop-types";

import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import InsertCommentIcon from "@material-ui/icons/InsertComment";
import ReplyIcon from "@material-ui/icons/Reply";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";

import { makeStyles } from "@material-ui/core/styles";

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
  icon: {
    margin: "0 1rem",
    display: "inline-flex",
    verticalAlign: "middle",
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
              <Typography variant="h2" classes={{ h2: classes.title }}>
                Name of Book{" "}
              </Typography>
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
                <span className={classes.icon}>
                  <ReplyIcon /> 3
                </span>
                <span className={classes.icon}>
                  <InsertCommentIcon /> 3
                </span>
                <span className={classes.icon}>
                  <ImportContactsIcon /> 3
                </span>
              </Grid>
            </Grid>
            <Grid item>
              <Button fullWidth variant="contained" color="primary">
                Continue
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </Grid>
    </Grid>
  );
}

// BookInfo.propTypes = {
//   book: PropTypes.object,
// };
