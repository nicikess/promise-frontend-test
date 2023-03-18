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
import CssBaseline from "@mui/material/CssBaseline";

function UserProfile({ children }) {
  const classes = useStyles();
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <CssBaseline />
      <Card className={classes.card} style={{ border: "none", boxShadow: "none" }}>
        <CardMedia
          className={classes.cardMediaOverview}
          image={require("../../data/participant_profiles/" +
            String(children) +
            ".jpg")}
          title="Image title"
        />
      </Card>
    </Box>
  );
}
export default UserProfile;
