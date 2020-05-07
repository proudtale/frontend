import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  item: {
    backgroundColor: "#F1F1F1",
    padding: "15px 30px",
  },
}));
/*
chapters:{
    {
        title: "dafa"
        completed: true
    }
}
*/

export default function ChapterList({ chapters, ...rest }) {
  const classes = useStyles();
  return (
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
  );
}
