import React from "react";
import { Tabs, Tab, Grid, Typography, Container, Box, Card, CardMedia, CardContent, Divider } from '@material-ui/core'

import useStyles from "../../styles";
import participants from "../../data/Participants";
import CssBaseline from '@mui/material/CssBaseline';

function UserProfile ({ children, value, index }) {
    const classes = useStyles();
    return (
        <Box>
            <CssBaseline />
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5">
                        {children}
                    </Typography>
                    <Typography variant="h6">
                        Example user story
                    </Typography>
                    <Typography variant="body1">
                        {participants[0].userStory}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default UserProfile;


