import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

import { connect } from "react-redux";
import { getBookChaptersData } from "../../redux/actions/chapterActions";

import ReactQuill from "react-quill";
import MyButton from "../../util/MyButton";
import CreateChapter from "../../components/chapter/CreateChapter";
const drawerWidth = 240;

const styles = (theme) => ({
  paper: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: "100%",
    padding: theme.spacing(3),
  },
  paperShift: {
    // Uncomment for animation
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: 1,
    background: "#2C3B5A",
    boxShadow: "inset 0px 4px 62px rgba(0, 0, 0, 0.25)",
    color: "white",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    height: "100%",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  centerText: {
    textAlign: "center",
  },
  gridItem: {
    flex: "1 1 auto",
  },
  quillStyles: {
    height: "calc(100% - 3rem)",
  },
  titleInput: {
    marginBottom: theme.spacing(3),

    flex: "0 1 auto",
  },
  chapterBtn: {
    maxWidth: "150px",
  },
  bookTitle: {
    marginBottom: theme.spacing(7),
  },
});

// TODO: Add API call from backend to replace title and chapters
//TODO: make editor functional to work with loading in data from the backend
export class chapter extends Component {
  state = {
    open: true,
    edit: false,
    title: "Title of Chapter",
    chapters: ["Title of Chapter"],
    currChapter: "",
    bookId: "",
  };

  static getDerivedStateFromProps(props, state) {
    const { chapterId, bookId } = props.match.params;
    return {
      ...state,
      currChapter: chapterId ? chapterId : "",
      bookId: bookId ? bookId : "",
    };
  }

  componentDidMount() {
    this.props.getBookChaptersData(this.state.bookId);
  }

  handleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  handleEditTitle = () => {
    this.setState({ edit: !this.state.edit });
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  render() {
    const { classes } = this.props;
    console.log(this.state.currChapter);
    return (
      <Paper
        className={clsx(classes.paper, {
          [classes.paperShift]: this.state.open,
        })}
      >
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.state.open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader} />

          <Box height="100%" marginTop="50%">
            <Typography
              className={classes.bookTitle}
              align="center"
              variant="h4"
            >
              Book Title
            </Typography>
            <Typography align="center" variant="h5">
              Chapters
            </Typography>

            <List>
              {this.props.chapters.length === 0 ? (
                <ListItem button>
                  <ListItemText
                    classes={{ primary: classes.centerText }}
                    primary={"No Chapters Found!"}
                  />
                </ListItem>
              ) : (
                this.props.chapters.map((chapter, index) => (
                  <ListItem button key={index}>
                    <ListItemText
                      classes={{ primary: classes.centerText }}
                      primary={chapter.title}
                    />
                  </ListItem>
                ))
              )}
              {/* {this.state.chapters.map((text, index) => (
                <ListItem button key={text}>
                  <ListItemText
                    classes={{ primary: classes.centerText }}
                    primary={text}
                  />
                </ListItem>
              ))} */}
            </List>
            <CreateChapter bookId={this.state.bookId} />
          </Box>
        </Drawer>

        <Grid
          className={clsx(classes.content, {
            [classes.contentShift]: this.state.open,
          })}
          container
          direction={"column"}
        >
          <Button
            style={{ textAlign: "left" }}
            className={classes.chapterBtn}
            onClick={this.handleDrawer}
          >
            {this.state.open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            <Typography>Chapters</Typography>
          </Button>
          <Grid className={classes.titleInput} item xs={12}>
            {this.state.edit ? (
              <React.Fragment>
                <Input
                  inputProps={{
                    style: { fontSize: "3rem" },
                  }}
                  placeholder="Enter Your Title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                <Button onClick={this.handleEditTitle}>Done</Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography display="inline" variant="h3">
                  {this.state.title}
                </Typography>
                <MyButton
                  tip="Edit chapter title"
                  onClick={this.handleEditTitle}
                  btnClassName="button"
                >
                  <EditIcon color="primary" />
                </MyButton>
              </React.Fragment>
            )}
          </Grid>
          <Grid classes={{ root: classes.gridItem }} item xs={12}>
            <ReactQuill className={classes.quillStyles} />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => ({
  chapters: state.chapterData.chapters,
});

export default connect(mapStateToProps, { getBookChaptersData })(
  withStyles(styles)(chapter)
);
