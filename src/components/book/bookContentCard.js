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
import BookContentCardDetail from "../book/bookContentCardDetail";

const styles = {
  root: {
    maxWidth: 280,
    marginBottom: "2em",
    marginLeft: "0.5em",
  },
  media: {
    width: "14em",
    height: 280,
    backgroundSize: "cover",
  },
  content: {
    width: "14em",
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
    // width: "12em"
  },
  desc: {
    marginTop: "1em",
    wordWrap: "break-word",
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
                {title.slice(0, 25)}
              </Typography>
              <Typography
                className={classes.desc}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {desc.slice(0, 60).replace(/(<([^>]+)>)/g, "")}
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
