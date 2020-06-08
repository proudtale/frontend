import React, { useState } from "react";
// import PropTypes from "prop-types";

import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";

import InsertCommentIcon from "@material-ui/icons/InsertComment";
import ReplyIcon from "@material-ui/icons/Reply";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";

import { makeStyles } from "@material-ui/core/styles";
import Pill from "../../util/Pill";
import MyButton from "../../util/MyButton";
import Proudtalelogo from "../../assets/images/proudtalelogo.png";

export default function BookInfo() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container direction="column" alignItems="center" spacing={3}>
      <Grid
        className={classes.root}
        justify="center"
        container
        spacing={4}
        wrap="wrap"
        item
      >
        <Grid item>
          <img
            className={classes.media}
            src="https://marketplace.canva.com/EADaiVGpN7g/1/0/1003w/canva-red-sushi-japanese-cooking-recipe-ebook-cover-cN1LLwUwKqM.jpg"
            alt="Book Cover"
          />
        </Grid>

        <Grid item xs={6} container>
          <Grid
            className={classes.bookInfo}
            item
            container
            direction="column"
            justify="space-around"
          >
            <Grid item>
              <Grid container justify="space-between">
                <Typography variant="h2" classes={{ h2: classes.title }}>
                  Name of Book
                </Typography>
                <Pill
                  classes={{
                    root: classes.progress,
                    disabled: classes.blackText,
                  }}
                  label="completed"
                  color="#ABFFC8"
                  disabled
                />
              </Grid>
              <CardHeader
                avatar={
                  <img
                    className="profile-image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1024px-Cat03.jpg"
                    alt="profile"
                  />
                }
                title="username1"
                subheader="September 14, 2016"
                classes={{ title: classes.username }}
              />
              <Grid container>
                <span className={classes.iconParent}>
                  <ReplyIcon className={classes.icon} /> 3
                </span>
                <span className={classes.iconParent}>
                  <InsertCommentIcon className={classes.icon} /> 3
                </span>
                <span className={classes.iconParent}>
                  <ImportContactsIcon className={classes.icon} /> 3
                </span>
              </Grid>
            </Grid>
            <Grid item>
              {["nonfiction", "cooking"].map((v) => (
                <Pill className={classes.tag} label={v} color="#F1F1F1" />
              ))}
            </Grid>
            <Grid item>
              <Typography variant="body2" component="p">
                Continue As:
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Button fullWidth variant="contained" color="primary">
                    eBook
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button fullWidth variant="outlined" color="primary">
                    Audio Book
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container justify="center">
        <Grid item xs={8}>
          <Typography variant="h4" component="h3">
            Synopsis
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
          <Typography
            onClick={handleClickOpen}
            component="a"
            classes={{ root: classes.hoverShadow }}
          >
            Copyright Details
          </Typography>
          <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <MyButton
              tip="Close"
              onClick={handleClose}
              tipClassName={classes.closeButton}
            >
              <CloseIcon />
            </MyButton>

            <Grid container justify="center">
              <Grid item>
                <Avatar
                  alt="proudtale logo"
                  src={Proudtalelogo}
                  className={classes.logo}
                  classes={{
                    root: classes.logoRoot,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <DialogContent className={classes.dialogContent}>
                  THIS IS STATIC CONTENT FOR NOW. WILL BE REPLACED WITH PROPS
                  LATER. Copyright © 2010 by Bill Shakespeare All rights
                  reserved. No part of this publication may be reproduced,
                  distributed, or transmitted in any form or by any means,
                  including photocopying, recording, or other electronic or
                  mechanical methods, without the prior written permission of
                  the publisher, except in the case of brief quotations embodied
                  in critical reviews and certain other noncommercial uses
                  permitted by copyright law. For permission requests, write to
                  the publisher, addressed “Attention: Permissions Coordinator,”
                  at the address below. Imaginary Press 1233 Pennsylvania Avenue
                  San Francisco, CA 94909 www.imaginarypress.com Ordering
                  Information: Quantity sales. Special discounts are available
                  on quantity purchases by corporations, associations, and
                  others. For details, contact the publisher at the address
                  above. Orders by U.S. trade bookstores and wholesalers. Please
                  contact Big Distribution: Tel: (800) 800-8000; Fax: (800)
                  800-8001 or visit www.bigbooks.com. Printed in the United
                  States of America
                </DialogContent>
              </Grid>
            </Grid>
          </Dialog>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  ...theme.spread,
  root: {
    width: "100%",
  },
  media: {
    width: 300,
  },
  title: {
    fontWeight: 500,
  },
  iconParent: {
    margin: "0 1rem",
    display: "inline-flex",
    verticalAlign: "middle",
  },
  icon: {
    marginRight: "7px",
  },
  progress: {
    maxHeight: "35px",
    padding: theme.spacing(0, 4),
  },
  blackText: {
    color: "rgb(0, 0, 0) !important",
  },
  tag: {
    margin: "0 8px 0 0",
    padding: theme.spacing(0, 4),
  },
  username: {
    fontSize: "2rem",
    fontWeight: "300",
  },
  closeButton: {
    position: "absolute",
    left: "90%",
  },
  dialogContent: {
    padding: 30,
    lineHeight: "30px",
  },
  logo: {
    margin: theme.spacing(3),
  },
  logoRoot: {
    height: "80px",
    width: "80px",
  },
  hoverShadow: {
    "&:hover": {
      textShadow: "2px -1px 3px rgba(0,0,0,0.24)",
    },
  },
}));

// BookInfo.propTypes = {
//   book: PropTypes.object,
// };
