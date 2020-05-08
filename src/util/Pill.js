import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {},
}));
export default function Pill({ label, color, ...rest }) {
  const classes = useStyles();
  return (
    <Button
      {...rest}
      size="small"
      variant="contained"
      style={{ backgroundColor: color, borderRadius: "16px" }}
      disableElevation
    >
      {label}
    </Button>
  );
}
