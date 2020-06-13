import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
//MUI Core
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
// MUI Icon
import ShareIcon from "@material-ui/icons/Share";
// Component
import BookContentCardDetail from "./BookContentCardDetail";
// Util
import {
  formatStringThumbnail,
  formatString,
  formatStringReplaceHtmltag,
} from "../../util/helpers";

const styles = {
  root: {
    marginBottom: "2em",
    marginLeft: "0.5em",
    width: "22em",
  },
  content: {
    height: 200,
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
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
    const { bookImage, author, title, desc, userImage, createdAt } = this.props;
    const { classes } = this.props;
    return (
      <Fragment>
        <Card className={classes.root}>
          <CardActionArea>
            <BookContentCardDetail
              bookImage={bookImage}
              author={author}
              title={title}
              desc={formatStringReplaceHtmltag(desc)}
              userImage={userImage}
              createdAt={createdAt}
            />
          </CardActionArea>
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
              {formatString(formatStringReplaceHtmltag(desc))}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="small" className={classes.button}>
              <ShareIcon />
            </Button>
          </CardActions>
        </Card>
      </Fragment>
    );
  }
}

BookContentCard.protoTypes = {
  bookImage: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
};

export default withStyles(styles)(BookContentCard);
