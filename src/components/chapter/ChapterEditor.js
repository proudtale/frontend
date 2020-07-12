/**
 * Copyright (c) 2020 proudtale
 * All rights reserved.
 *
 * Filename: ChapterEditor.js
 *
 * Key Options:
 * - edit the value for [this.props.chapter.body]
 *
 * Revision History:
 * - 05 June 2020, Queenie : Created
 * - 09 July 2020, Martin Hwang <m.hwang@proudtale.com> :
 *     Refactored functional component to class component
 *     Connected to backend API using React-Redux
 */
// React
import React, { Component, Fragment } from "react";
// MUI Core
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
// MUI Icon
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// Redux
import { connect } from "react-redux";
import { submitEditChapter } from "../../redux/actions/chapterActions";
// Quill.js embeded Text Editor
import ReactQuill from "react-quill";
import { Typography } from "@material-ui/core";
const styles = (theme) => ({
  ...theme.spread,
  quillStyles: {
    height: "calc(100% - 3rem)",
  },
  button: {
    "& :hover": {
      background: "rgb(28, 42, 72)",
      color: "#fff",
    },
  },
});
class ChapterEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorHtml: this.props.chapter.body,
      bookId: this.props.bookId,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ editorHtml: nextProps.chapter.body });
  }
  componentDidUpdate() {
    // console.log(this.state.bookId);
    // console.log(this.props.chapterId)
    // console.log(this.props.chapter)
  }
  handleChange(html) {
    this.setState({ editorHtml: html });
  }
  handleSave(bookId) {
    // this.props.history.push(`/book/chapters`);
    const editChapter = this.props.chapter;
    editChapter.body = this.state.editorHtml;
    this.props.submitEditChapter(editChapter, bookId);
  }
  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    // module and format for Quill.js Embeded Text Editor
    const chapterEditor = {
      moudles: {
        toolbar: [
          ["bold", "italic", "underline", "strike"], // toggled buttons
          ["blockquote", "code-block"],

          [{ header: 1 }, { header: 2 }], // custom button values
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }], // superscript/subscript
          [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
          [{ direction: "rtl" }], // text direction

          [{ size: ["small", false, "large", "huge"] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],
          ["link", "image", "video"],
          ["clean"], // remove formatting button
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        },
      },
      formats: [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
      ],
    };
    return (
      <Fragment>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" justifyContent="space-evenly">
            {/* Auto Save button */}
            <Box marginRight="2em">
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="start"
                    control={<Switch color="primary" />}
                    label="AutoSave"
                    labelPlacement="start"
                    disabled
                  />
                </FormGroup>
              </FormControl>
            </Box>
            {/* Save and Save as button  */}
            <Box marginRight="2em" className={classes.button}>
              <Button
                variant="outlined"
                disabled={loading}
                onClick={() => this.handleSave(this.state.bookId)}
              >
                Save
                {loading && <CircularProgress size={30} />}
              </Button>
            </Box>
            <Box marginRight="2em" className={classes.button}>
              <Button variant="outlined" disabled>
                Save as
              </Button>
            </Box>
          </Box>
          {/* Export and additional button */}
          <Box display="flex" justifyContent="space-evenly">
            <Box className={classes.button}>
              <Button variant="outlined" disabled className={classes.button}>
                Export
              </Button>
            </Box>
            <IconButton aria-label="additional menu" disabled>
              <MoreHorizIcon />
            </IconButton>
          </Box>
        </Box>
        {/* Quill.js Embeded Text Editor class Component */}
        {this.props.chapter === null ? (
          <Typography variant="h5">No chapter selected</Typography>
        ) : (
          <ReactQuill
            className={classes.quillStyles}
            modules={chapterEditor.moudles}
            formats={chapterEditor.formats}
            onChange={this.handleChange}
            value={this.state.editorHtml}
          />
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  UI: state.UI,
});
export default connect(mapStateToProps, { submitEditChapter })(
  withStyles(styles)(ChapterEditor)
);
