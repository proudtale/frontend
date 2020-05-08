import React, { Component } from "react";

import Paper from "@material-ui/core/Paper";
import BookInfo from "../../components/book/BookInfo";
import { Grid } from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  item: {
    backgroundColor: "#F1F1F1",
    padding: "15px 30px",
  },
  paper: {
    marginTop: "5rem",
    width: "75%",
    alignSelf: "center",
  },
  spacing: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
});

let chapters = [
  { title: "chapter 1: hello", completed: true },
  {
    title: "chapter 2: hi",
    completed: false,
  },
];

export class info extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper} elevation={3}>
        <div className={classes.spacing} />
        <Grid justify="center" container wrap="wrap" spacing={8}>
          <Grid item xs={12}>
            <BookInfo />
          </Grid>
          <Grid item xs={8}>
            <List>
              {chapters.map((c) => (
                <ListItem className={classes.item} button>
                  <ListItemText>{c.title}</ListItemText>
                  {c.completed ? (
                    <ListItemSecondaryAction>
                      <CheckCircleIcon color="primary" />
                    </ListItemSecondaryAction>
                  ) : (
                    ""
                  )}
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(info);
