import React, { useState, Fragment } from "react";

// MUI Core
// import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
// MUI Icon
import CloseIcon from "@material-ui/icons/Close";
// import InsertCommentIcon from "@material-ui/icons/InsertComment";
// import ReplyIcon from "@material-ui/icons/Reply";
// import ImportContactsIcon from "@material-ui/icons/ImportContacts";

// import Pill from "../../util/Pill";
// Util
import MyButton from "../../util/MyButton";
// Assets
import Proudtalelogo from "../../assets/images/proudtalelogo.png";

const useStyles = makeStyles((theme) => ({
  ...theme.spread,
  root: {
    height: "3em",
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
export default function copyrightDialog() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Typography
        className={classes.root}
        onClick={handleOpen}
        component="a"
        classes={{ root: classes.hoverShadow }}
      >
        Copyright details
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
              THIS IS STATIC CONTENT FOR NOW. WILL BE REPLACED WITH PROPS LATER.
              Copyright © 2010 by Bill Shakespeare All rights reserved. No part
              of this publication may be reproduced, distributed, or transmitted
              in any form or by any means, including photocopying, recording, or
              other electronic or mechanical methods, without the prior written
              permission of the publisher, except in the case of brief
              quotations embodied in critical reviews and certain other
              noncommercial uses permitted by copyright law. For permission
              requests, write to the publisher, addressed “Attention:
              Permissions Coordinator,” at the address below. Imaginary Press
              1233 Pennsylvania Avenue San Francisco, CA 94909
              www.imaginarypress.com Ordering Information: Quantity sales.
              Special discounts are available on quantity purchases by
              corporations, associations, and others. For details, contact the
              publisher at the address above. Orders by U.S. trade bookstores
              and wholesalers. Please contact Big Distribution: Tel: (800)
              800-8000; Fax: (800) 800-8001 or visit www.bigbooks.com. Printed
              in the United States of America
            </DialogContent>
          </Grid>
        </Grid>
      </Dialog>
    </Fragment>
  );
}
