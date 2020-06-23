import React, { Component } from "react";
// MUI Core
import withStyles from "@material-ui/core/styles/withStyles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
//Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const styles = {};

class ProudtaleExpansionPanel extends Component {
  render() {
    const { classes, title, details } = this.props;
    return (
      <Box marginTop="0.3em">
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="body1">
              <strong>{title}</strong>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Box display="flex" flexDirection="column">
              {details.map((detail, index) => {
                return (
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      className={classes.subheadingPanel}
                    >
                      <Typography variant="body1">
                        <strong>
                          {" "}
                          {title} {index + 1}
                        </strong>
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Box width="25em">{detail.chapterTitle}</Box>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                );
              })}
            </Box>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Box>
    );
  }
}

export default withStyles(styles)(ProudtaleExpansionPanel);
