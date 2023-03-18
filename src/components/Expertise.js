import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Container,
  CardMedia,
  Modal,
  Box,
  Tab,
  Tabs,
} from "@material-ui/core";
import { useState } from "react";
import useStyles from "../styles";
import CssBaseline from "@mui/material/CssBaseline";

import PmExpertise from "./subcomponents/PmExpertise";
import AnalysisExpertise from "./subcomponents/AnalysisExpertise";
import VerticalSpace from "./subcomponents/VerticalSpace";

const Expertise = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Grid container spacing={2} direction="row">
        <VerticalSpace />
        <VerticalSpace />
        <Grid item xs={12}>
          <Typography variant="h2" align="center" color="textPrimary">
            ProMiSE expertise data
          </Typography>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Typography variant="body1" color="textPrimary" align="center">
            The chosen participants have different levels of expertise. Here you
            find how experienced a certain participant in terms of process
            mining and analysis is.
          </Typography>
        </Grid>
        <Grid item xs={3}></Grid>
        <VerticalSpace />
        <Grid item xs={12}>
          <Divider p={5} />
        </Grid>
        <VerticalSpace />
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
              <Tabs value={selectedTab} onChange={handleChange} centered>
                <Tab label="Process mining expertise" />
                <Tab label="Analysis expertise" />
              </Tabs>
            </Box>
          </Grid>
          <Grid item xs={12}>
            {selectedTab === 0 && <PmExpertise />}
            {selectedTab === 1 && <AnalysisExpertise />}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Expertise;
