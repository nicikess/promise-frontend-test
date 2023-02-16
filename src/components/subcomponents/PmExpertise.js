import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CssBaseline from '@mui/material/CssBaseline';

import {useState} from "react"

import { Typography, Button, Card, CardActions, CardContent, Divider, Grid, Container, CardMedia, Modal, Box, Tab, Tabs } from '@material-ui/core'

import participants from "../../data/Participants";

import useStyles from "../../styles";


const PmExpertise = () => {

    const classes = useStyles()

    const [open, setOpen] = useState(false);

    const [pmExpertise, setPmExpertise] = React.useState('');
    const [selectedParticipantsPM, setSelectedParticipantsPM] = React.useState(participants);

    const handleSelectedParticipantsPM = (value) => {

        console.log(value)

        var selectedParticipants = []
        participants.map(participant => {
            if (participant.pmExpertise === value) {
                selectedParticipants.push(participant)
            }
        });
        if (value == "None") {
            selectedParticipants = participants
        }
        setSelectedParticipantsPM(selectedParticipants)
    }
  
    const handleChangePMExpertise = (event) => {
        setPmExpertise(event.target.value);
        handleSelectedParticipantsPM(event.target.value)
    };

    return (
        <Container>
        <CssBaseline />
            <Grid item xs={12} align="center">
            </Grid>
                <Grid container spacing={4}>
                <Grid item xs={12} align="center">
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">PM</InputLabel>
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={pmExpertise}
                        label="PM expertise"
                        onChange={handleChangePMExpertise}
                        >
                        <MenuItem value="None">
                                <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Basic"}>Basic</MenuItem>
                        <MenuItem value={"Average"}>Average</MenuItem>
                        <MenuItem value={"Good"}>Good</MenuItem>
                        <MenuItem value={"Advanced"}>Advanced</MenuItem>
                        </Select>
                        <FormHelperText>Select PM expertise</FormHelperText>
                    </FormControl>
                </Grid>
                    {selectedParticipantsPM.map((participant) => (   
                    <Grid item key={participant.name} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia 
                                    className = {classes.cardMedia}
                                    image={require('../../data/participant_profiles/'+String(participant.name)+'_blank'+'.jpg')} 
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h5">
                                        {participant.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                        Process Mining expertise: {participant.pmExpertise}
                                    </Typography>
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
                                        src={require('../../data/participant_profiles/'+String(participant.name)+'_legend'+'.jpg')} 
                                    />
                                    </Modal>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}
                <Grid item xs={12}></Grid>
                 <Grid item xs={12}></Grid>
                </Grid>
                 <Grid item xs={12}>
                     <Divider p={5}/>
                 </Grid>
        </Container>
    ) 
}

export default PmExpertise