import React from "react";
import { Tab, Tabs, Grid, Typography, Container, Box, Card, CardMedia, CardContent, Divider } from '@material-ui/core'

import CssBaseline from '@mui/material/CssBaseline';
import participants from "../data/Participants";
import UserProfile from "./subcomponents/UserProfile";
import UserStory from "./subcomponents/UserStory";

const Overview = () => {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <Container maxWidth="lg">
            <CssBaseline />
            <Grid container spacing={2} direction="row">
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                ProMiSE participant overview
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider p={5}/>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={2}>
                <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                {participants.map((participant) => (
                    <Tab label={participant.name}/>
                ))}
                </Tabs>
            </Grid>
            <Grid item xs={10}>
                {participants.map((participant, i) => (
                    <TabPanel value={value} index={i}>
                        {participant.name}
                    </TabPanel>
                ))}
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
        </Grid>
        <Grid item xs={12}>
                <Divider p={5}/>
            </Grid>
        </Container>
    );
}

function TabPanel(props) {
    const { children, value, index } = props;
    const [selectedTab, setSelectedTab] = React.useState(0);
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
      <div>
        {value === index && (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Tabs value={selectedTab} onChange={handleChange} centered>
                        <Tab label="Participant Overview"/>
                        <Tab label="User Story"/>
                    </Tabs>
                </Box>
            </Grid>
            <Grid item xs={11}>
                {selectedTab === 0 && <UserProfile children={children}/>}
                {selectedTab === 1 && <UserStory children={children} value={value} index={index}/>}
            </Grid>
        </Grid>
        )}
      </div>
    );
  }

export default Overview;