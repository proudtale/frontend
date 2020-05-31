import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactQuill from "react-quill";

const useStyles = makeStyles((theme) => ({
  ...theme.spread,
  quillStyles: {
    height: "calc(100% - 3rem)",
  },
}));

export default function ChapterEditor({ body, ...rest }) {
  const classes = useStyles();
  const [para, setPara] = useState(body);
  return (
    <Fragment>
      <ReactQuill
        className={classes.quillStyles}
        onChange={setPara}
        value={para}
        {...rest}
        // bounds={'.app'}
      />
    </Fragment>
  );
}
