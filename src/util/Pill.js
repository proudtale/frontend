import React from "react";
import Button from "@material-ui/core/Button";

export default function Pill({ label, color, ...rest }) {
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
