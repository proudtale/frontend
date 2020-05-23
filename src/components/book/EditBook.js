import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
// MUI Stuff
import { connect } from "react-redux";
import { uploadBookImage } from "../../redux/actions/bookActions";
// Icons
import EditIcon from "@material-ui/icons/Edit";

const styles = {
  editbtn: {
    display: "inline",
    "& label": {
      cursor: "pointer",
    },
  },
  input: {
    display: "none",
  },
};

class EditBook extends Component {
  handleBookImageChange = (event) => {
    const bookImage = event.target.files[0];
    const formData = new FormData();
    formData.append("bookImage", bookImage, bookImage.name);
    // this.props.uploadBookImage(formData, this.props.bookId, this.props.userHandle)
    console.log(this.props.bookId);
    console.log(this.props.userHandle);
  };
  // handleAddPicture = () => {
  //   const fileInput = document.getElementById("bookImageInput");
  //   fileInput.click();
  // }
  render() {
    const { classes } = this.props;
    return (
      <Typography className={classes.editbtn}>
        <label className="bookImageInput">
          <input
            className={classes.input}
            type="file"
            id="bookImageInput"
            onChange={this.handleBookImageChange}
          />
          <EditIcon color="primary" />
        </label>
      </Typography>
    );
  }
}
EditBook.propTypes = {
  uploadBookImage: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  bookId: PropTypes.string.isRequired,
};
export default connect(null, { uploadBookImage })(withStyles(styles)(EditBook));
