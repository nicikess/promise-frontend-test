import React from "react";
import {
  Tabs,
  Tab,
  Grid,
  Typography,
  Container,
  Box,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from "@material-ui/core";

import useStyles from "../../styles";
import participants from "../../data/Participants";
import CssBaseline from "@mui/material/CssBaseline";

function UserProfile({ children, value, index }) {
  const classes = useStyles();
  return (
    <Box>
      <CssBaseline />
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="body1">{participants[index].userStory}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UserProfile;
