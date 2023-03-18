import React from "react";
import { Grid, Container } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";

function VerticalSpace({}) {
  return (
    <Container maxWidth="md">
      <CssBaseline />
      <Grid container spacing={2} direction="row">
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Container>
  );
}

export default VerticalSpace;
