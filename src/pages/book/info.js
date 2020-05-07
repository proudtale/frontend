import React, { Component } from "react";

import Paper from "@material-ui/core/Paper";
import BookInfo from "../../components/book/BookInfo";
import { Grid } from "@material-ui/core";
import ChapterList from "../../components/chapter/ChapterList";

import { withStyles } from "@material-ui/core/styles";

let chapters = [
  { title: "chapter 1: hello", completed: true },
  {
    title: "chapter 2: hi",
    completed: false,
  },
];

export class info extends Component {
  render() {
    return (
      <Paper>
        <Grid justify="center" container wrap="wrap" spacing={8}>
          <Grid item xs={12}>
            <BookInfo />
          </Grid>
          <Grid item xs={8}>
            <ChapterList chapters={chapters} />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default info;
