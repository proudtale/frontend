import React, { Component } from 'react';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux';
import { getScreams } from '../redux/actions/dataActions';

//quilljs
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class textEditor extends Component {
  // componentDidMount() {
  //   this.props.getScreams();
  // }
  constructor (props) {
    super(props)
    this.state = { editorHtml: '', theme: 'snow' }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange (html) {
  	this.setState({ editorHtml: html });
  }
  
  handleThemeChange (newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme })
  }
  render() {

    return (
      <div>
          <ReactQuill 
            theme={this.state.theme}
            onChange={this.handleChange}
            value={this.state.editorHtml}
            modules={textEditor.modules}
            formats={textEditor.formats}
            // bounds={'.app'}
            placeholder={this.props.placeholder}
          />
      </div>
    );
  }
}
textEditor.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

textEditor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
textEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

/* 
 * PropType validation
 */
textEditor.propTypes = {
  placeholder: PropTypes.string,
}

export default connect(
  mapStateToProps,
  { getScreams }
)(textEditor);