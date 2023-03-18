import React from "react";
import { Typography, Divider, Grid, Container } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";

const Home = () => {
  return (
    <Container Container maxWidth="md">
      <CssBaseline />
      <Grid container spacing={2} direction="row">
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            The ProMiSE project
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider p={5} />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            align="left"
            color="textPrimary"
            gutterBottom
          >
            In the past decade, process mining has gained momentum both in
            academia and industry, aiming to support organizations in analyzing
            the vast amounts of data collected in their information systems from
            a process perspective in order to extract processes, detect
            deviations, identify bottlenecks with the goal to improve their
            busines processes. However, process mining encompasses several
            exploratory analysis tasks, which require analysts to rely on their
            own experience to make sense of data. As a result, analysts’ work
            remains mostly unstructured and knowledge-intensive, posing
            challenging for the less experienced analysts and the development of
            methodological and operational guidance.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="left" color="textPrimary">
            This project opens up a new direction for process mining research
            and pursues the following main goals:
          </Typography>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
          <Typography variant="body1" align="left" color="textPrimary">
            1) Gaining a comprehensive understanding of how analysts do process
            mining in practice, i.e., the “process of process mining,” including
            frequent patterns of effective and noneffective behavior, analysis
            profiles, common analysis strategies, and typical challenges. {"\n"}
          </Typography>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
          <Typography variant="body1" align="left" color="textPrimary">
            2) Developing methodological guidance and software-based operational
            support to assist novice analysts during the analysis, building upon
            effective and noneffective patterns of behavior observed in
            practice.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="left" color="textPrimary">
            This project will significantly advance our understanding of how
            analysts conduct exploratory process mining tasks, potentially
            providing useful empirical evidence to increase the accessibility of
            process mining approaches and applications to non-expert users and
            support the training and education of novice analysts process mining
            students.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="left" color="textPrimary">
            In this project, financed by the Swiss National Science Foundation,
            researchers from the Institute of Computer Science at the University
            of St. Gallen will work together with distinguished researchers from
            the University of Haifa (IL), the Technical University of Denmark
            (DK), University of Copenhagen (DK). All the members of the
            international project team are well-known in the field of process
            mining and have relevant and complementary expertise in the areas of
            the proposed project, namely process mining, business process
            management, information systems, and software engineering.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider p={5} />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
