import React, { Component, Fragment } from "react";

//MUI Core
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
// MUI Icon
import ShareIcon from "@material-ui/icons/Share";
// Component
import BookContentCardDetail from "./BookContentCardDetail";
// Util
import { formatStringThumbnail, formatString } from "../../util/helpers";

const styles = {
  root: {
    marginBottom: "2em",
    marginLeft: "0.5em",
    width: "22em",
  },
  media: {
    height: 280,
    backgroundSize: "cover",
  },
  content: {
    height: 200,
  },
  cardActions: {
    display: "flex",
    justifyContent: "right",
  },
  button: {
    color: "#1c2a48",
    "&:nth-child(2)": {
      marginLeft: "-1em",
    },
  },
  title: {
    marginTop: "0.5em",
    wordWrap: "break-word",
    fontSize: "1rem",
  },
  desc: {
    marginTop: "1em",
    wordWrap: "break-word",
    height: "10em",
    overflowY: "auto",
  },
};

class BookContentCard extends Component {
  render() {
    const { bookImage, author, title, desc, userImage } = this.props.book;
    const { classes } = this.props;
    return (
      <Fragment>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={bookImage}
              title={title}
            />
            <CardContent className={classes.content}>
              {/* <Typography gutterBottom variant="subtitle1" component="span" color="primary">
                {author}
              </Typography> */}
              <Typography
                className={classes.title}
                gutterBottom
                variant="h6"
                component="h6"
                align="center"
              >
                {formatStringThumbnail(title)}
              </Typography>
              <Typography
                className={classes.desc}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {formatString(desc.replace(/(<([^>]+)>)/g, ""))}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Button size="small" className={classes.button}>
              <ShareIcon />
            </Button>
            <BookContentCardDetail
              bookImage={bookImage}
              author={author}
              title={title}
              desc={desc.replace(/(<([^>]+)>)/g, "")}
              userImage={userImage}
            />
          </CardActions>
        </Card>
      </Fragment>
    );
  }
}
export default withStyles(styles)(BookContentCard);
