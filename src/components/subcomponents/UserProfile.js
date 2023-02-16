import React from "react";
import { Tabs, Tab, Grid, Typography, Container, Box, Card, CardMedia, CardContent, Divider } from '@material-ui/core'

import useStyles from "../../styles";
import CssBaseline from '@mui/material/CssBaseline';

function UserProfile ({ children }) {
    const classes = useStyles();
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <CssBaseline />
        <Card className={classes.card}>
            <CardMedia 
                className = {classes.cardMediaOverview}
                image={require('../../data/participant_profiles/'+String(children)+'_legend'+'.jpg')} 
                title="Image title"
            />
            <CardContent className={classes.cardContent}>
                <Typography variant="h5">
                    {children}
                </Typography>
                <Typography>
                    This image shows the user profile of {String(children).toLowerCase()}
                </Typography>
            </CardContent>
        </Card>
        </Box>
    );
}
export default UserProfile;


