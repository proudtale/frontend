/**
 * Copyright (c) 2020 proudtale
 * All rights reserved.
 *
 * Filename: book/TextEditor.js
 *
 * Key Options:
 * -  Post new book for
 *    [const book = this.props.book
      book.desc = this.state.editorHtml
      this.props.submitEdit(book)] in Quill.js Text Editor
 *
 * Revision History:
 * - 05 Feb 2020, Martin <m.hwang@proudtale.com>: Created
 */

// React
import React, { Component } from "react";
import PropTypes from "prop-types";
// MUI Core
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
// Quilljs
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// Redux
import { connect } from "react-redux";
import { submitEdit } from "../../redux/actions/bookActions";

const styles = {
  submitButton: {
    position: "relative",
    float: "right",
    marginTop: "2em",
  },
};

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorHtml: this.props.book ? this.props.book.desc : "",
      theme: "snow",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  handleThemeChange(newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme });
  }

  handleClick = (event) => {
    if (this.props.data.edit) {
      event.preventDefault();
      const book = this.props.book;
      book.desc = this.state.editorHtml;
      this.props.submitEdit(book);
    } else {
      // if we are not in editing mode we are making a post!
      this.props.setValue(this.state.editorHtml);
    }
  };

  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    return (
      <div>
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={TextEditor.modules}
          formats={TextEditor.formats}
          // bounds={'.app'}
          placeholder={this.props.placeholder}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submitButton}
          disabled={loading}
          onClick={this.handleClick}
        >
          Save
          {!loading && (
            <CircularProgress size={30} className={classes.progressSpinner} />
          )}
        </Button>
      </div>
    );
  }
}
TextEditor.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  scream: PropTypes.object,
};

const mapStateToProps = (state) => ({
  data: state.data,
  UI: state.UI,
});

TextEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
TextEditor.formats = [
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
];

/*
 * PropType validation
 */
TextEditor.propTypes = {
  placeholder: PropTypes.string,
};

export default connect(mapStateToProps, { submitEdit })(
  withStyles(styles)(TextEditor)
);
