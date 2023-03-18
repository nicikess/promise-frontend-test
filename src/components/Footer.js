import React from "react";
import {
  Typography,
  AppBar,
  Link,
  Menu,
  Grid,
  Toolbar,
  Container,
  Tabs,
  Tab,
  Box,
  IconButton,
  Button,
} from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";

import useStyles from "../styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <Container
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <CssBaseline />
      <Grid container spacing={2} direction="row">
        <Grid item xs={12}>
          <footer className={classes.footer}>
            <Typography variant="h6" align="center">
              ProMiSE: Process Mining Support for End-users
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
            >
              Institute of Computer Science - ICS-HSG
            </Typography>
          </footer>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Footer;
