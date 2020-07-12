/**
 * Copyright (c) 2020 proudtale
 * All rights reserved.
 *
 * Filename: ChapterEditor.js
 *
 * Key Options:
 * -
 *
 * Revision History:
 * - 05 June 2020, Queenie : Created
 * - 09 July 2020, Martin Hwang <m.hwang@proudtale.com> : Modified and fixed
 */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// CLSX
import clsx from "clsx";
// MUI core
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CircularProgress from "@material-ui/core/CircularProgress";
// MUI Icon
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// Componets
import CreateChapter from "../../components/chapter/CreateChapter";
import ChapterEditor from "../../components/chapter/ChapterEditor";
// import ChapterList from "../../components/chapter/ChapterList";
// Helpers Utility
import { formatStringThumbnail } from "../../util/helpers";
// Redux
import { connect } from "react-redux";
import {
  getChapters,
  editChapter,
  clearErrors,
} from "../../redux/actions/chapterActions";
// import ChapterList from '../../components/chapter/ChapterList';

// Width of drawer
const drawerWidth = 240;
const sytles = (theme) => ({
  paper: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    padding: theme.spacing(3),
    flexBasis: "100%",
    boxShadow: "none",
  },
  paperShift: {
    // Uncomment for animation
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
    flexWrap: "nowrap",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: 1,
    background: "rgb(28, 42, 72)",
    boxShadow: "inset 0px 4px 62px rgba(0, 0, 0, 0.25)",
    color: "white",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
  },
  centerText: {
    textAlign: "center",
  },
  circularProgress: {
    display: "flex",
    justifyContent: "center",
    color: "red",
  },
  chapterEditor: {
    display: "none",
  },
});
class chapter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      chapterInChapterEditor: {
        chapterId: null,
        title: null,
        body: "<h3>Please select chapter</h3>",
        createdAt: null,
      },
      selectedChapterId: null,
    };
    const bookId = this.props.match.params.bookId;
    this.props.getChapters(bookId);
    this.props.clearErrors();
    this.handleAssignChapterToPropsInChapterEditor = this.handleAssignChapterToPropsInChapterEditor.bind(
      this
    );
  }
  componentDidMount() {
    this.handleAssignChapterToPropsInChapterEditor();
  }
  handleMenuDrawer = () => {
    this.setState({ open: !this.state.open });
  };
  handleAssignChapterToPropsInChapterEditor(e) {
    this.setState({ selectedChapterId: e });
    const chapters = this.props.chapter.chapters;
    let i = 0;
    while (i < chapters.length) {
      if (chapters[i].chapterId === e) {
        this.setState({ chapterInChapterEditor: chapters[i] });
      }
      i++;
    }
  }
  render() {
    const { chapters } = this.props.chapter;
    const {
      classes,
      UI: { loading },
    } = this.props;
    let content = (
      <Fragment>
        <Box display="block">
          <Button onClick={this.handleMenuDrawer}>
            {this.state.open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            <Typography variant="h6" noWrap>
              Chapter
            </Typography>
          </Button>
        </Box>
        <Grid classes={{ root: classes.gridItem }} item xs={12}>
          {/* ChapterEditor includes autosave, save, save as, export button */}
          <ChapterEditor
            bookId={this.props.match.params.bookId}
            chapter={this.state.chapterInChapterEditor}
            chapterId={this.state.selectedChapterId}
            className={classes.chapterEditor}
          />
        </Grid>
      </Fragment>
    );
    const listChapter = (
      <Fragment>
        {loading ? (
          <Box margin="0.5em" display="flex" justifyContent="center">
            <CircularProgress size={30} color="white" />
          </Box>
        ) : chapters.length === 0 ? (
          <List>
            <ListItem button>
              <ListItemText
                classes={{ primary: classes.centerText }}
                primary={"No Chapters Found"}
              />
            </ListItem>
          </List>
        ) : (
          chapters.map((chapter, index) => (
            <List>
              <ListItem
                button
                key={index}
                onClick={() =>
                  this.handleAssignChapterToPropsInChapterEditor(
                    chapter.chapterId
                  )
                }
                className={classes.listSelected}
              >
                <ListItemText
                  classes={{ primary: classes.centerText }}
                  primary={chapter.title}
                />
              </ListItem>
            </List>
          ))
        )}
      </Fragment>
    );
    const menuDrawer = (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={this.state.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Box className={classes.drawerHeader} />
        <Box height="100%" marginTop="50%">
          <Box marginBottom="0.8em" fontWeight="bolder">
            <Typography align="center" variant="h5">
              {formatStringThumbnail(this.props.match.params.bookId)}
            </Typography>
          </Box>
          <Typography align="center" variant="h6">
            Chapters
          </Typography>
          {listChapter}
          <CreateChapter bookId={this.props.match.params.bookId} />
        </Box>
      </Drawer>
    );
    return (
      <Paper
        className={clsx(classes.paper, {
          [classes.paperShift]: this.state.open,
        })}
      >
        <CssBaseline />
        {menuDrawer}
        <Grid
          className={clsx(classes.content, {
            [classes.contentShift]: this.state.open,
          })}
          container
          direction={"column"}
        >
          {content}
        </Grid>
      </Paper>
    );
  }
}
chapter.propTypes = {
  getChapters: PropTypes.func.isRequired,
  chapter: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  chapter: state.chapter,
  UI: state.UI,
});
export default connect(mapStateToProps, {
  getChapters,
  editChapter,
  clearErrors,
})(withStyles(sytles)(chapter));
