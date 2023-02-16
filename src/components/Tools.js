import React from "react";
import { Typography, Button, Card, CardActions, CardContent, Divider, Grid, Container, CardMedia, Box, Modal } from '@material-ui/core'

import useStyles from "../styles";
import DropDown from "./subcomponents/DropDownExpertiseTool"
import CssBaseline from '@mui/material/CssBaseline';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from "react"


import participants from "../data/Participants";


const Tools = () => {
    const classes = useStyles()

    //added
    const [toolValue, setTool] = React.useState('');
    const [selectedParticipants, setSelectedParticipants] = React.useState(participants);

    const handleSelectedParticipants = (value) => {
        var selectedParticipants = []
        participants.map(participant => {
            if (participant.tool.includes(value)) {
                console.log(participant.name)
                selectedParticipants.push(participant)
            }
        });
        if (value == "None") {
            selectedParticipants = participants
        }
        setSelectedParticipants(selectedParticipants)
    }

    const handleChangeTool = (event) => {
      setTool(event.target.value);
      handleSelectedParticipants(event.target.value)
    };

    const [open, setOpen] = useState(false);

    return (
            <Container maxWidth="lg">
                <CssBaseline />
                <Grid container spacing={2} direction="row">
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}>
                    <Typography variant="h2" align="center" color="textPrimary">
                        ProMiSE tool data
                    </Typography>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <Typography variant="body1" color="textPrimary" align="center">
                    For their analysis the participants use different tools. Here you find which tools certain participants used for the task.
                    </Typography>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={12}>
                    <Divider p={5}/>
                </Grid>
                <Grid item xs={12} align="center">


                <FormControl sx={{ m: 1, minWidth: 120 }} >
                    <CssBaseline />
                    <InputLabel id="demo-simple-select-helper-label">Tool</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={toolValue}
                    label="Tool"
                    onChange={handleChangeTool}
                    >
                    <MenuItem value="None">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Disco"}>Disco</MenuItem>
                    <MenuItem value={"Celonis"}>Celonis</MenuItem>
                    <MenuItem value={"BupaR"}>BupaR</MenuItem>
                    <MenuItem value={"Pm4Py"}>Pm4Py</MenuItem>
                    </Select>
                    <FormHelperText>Select Tool</FormHelperText>
                </FormControl>

                    
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid container spacing={4}>
                    {selectedParticipants.map((participant) => (   
                    <Grid item key={participant.name} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia 
                                    className = {classes.cardMedia}
                                    image={require('../data/participant_profiles/'+String(participant.name)+'_blank'+'.jpg')} 
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h5">
                                        {participant.name}
                                    </Typography>
                                    {participant.tool.map((tool,i) => (
                                        <Typography key={i}>
                                            Tool: {tool}
                                        </Typography>
                                        ))
                                    }
                                </CardContent>
                                <CardActions>
                                <Button size="small" color="primary" onClick={() => setOpen(true)}>Show participant profile</Button>
                                <Modal
                                    open={open}
                                    onClose={() => setOpen(false)}
                                    aria-labelledby="child-modal-title"
                                    aria-describedby="child-modal-description"
                                    >
                                <Box 
                                    className={classes.modal}
                                    component="img"
                                    alt="The house from the offer."
                                    src={require('../data/participant_profiles/'+String(participant.name)+'_legend'+'.jpg')} 
                                />
                                </Modal>
                            </CardActions>
                            </Card>
                        </Grid>
                        ))}
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}>
                    <Divider p={5}/>
                </Grid>
                </Grid>
        </Container>
    );
}

export default Tools;