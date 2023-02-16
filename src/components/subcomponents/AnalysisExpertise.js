import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CssBaseline from '@mui/material/CssBaseline';

import useStyles from "../../styles";
import {useState} from "react"

import { Typography, Button, Card, CardActions, CardContent, Divider, Grid, Container, CardMedia, Modal, Box, Tab, Tabs } from '@material-ui/core'

import participants from "../../data/Participants";

const AnalysisExpertise = () => {

    const classes = useStyles()

    const [open, setOpen] = useState(false);

    const [analysisExpertise, setAnalysisExpertise] = React.useState('');
    const [selectedParticipantsExpertise, setSelectedParticipantsExpertise] = React.useState(participants);

    const handleSelectedParticipants = (value) => {

        console.log(value)

        var selectedParticipants = []
        participants.map(participant => {
            if (participant.analysisExpertise === value) {
                selectedParticipants.push(participant)
            }
        });
        if (value == "None") {
            selectedParticipants = participants
        }
        setSelectedParticipantsExpertise(selectedParticipants)

    }
  
    const handleChangeAnalysisExpertise = (event) => {
        setAnalysisExpertise(event.target.value);
        handleSelectedParticipants(event.target.value)
    };

    return (
        <Container>
        <CssBaseline />
        <Grid item xs={12} align="center">
        </Grid>
            <Grid container spacing={4}>
                <Grid item xs={12} align="center">
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Analysis</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={analysisExpertise}
                            label="Analysis expertise"
                            onChange={handleChangeAnalysisExpertise}
                        >
                            <MenuItem value="None">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Basic"}>Basic</MenuItem>
                            <MenuItem value={"Average"}>Average</MenuItem>
                            <MenuItem value={"Good"}>Good</MenuItem>
                            <MenuItem value={"Advanced"}>Advanced</MenuItem>
                        </Select>
                        <FormHelperText>Select analysis expertise</FormHelperText>
                    </FormControl>
                    </Grid>
                {selectedParticipantsExpertise.map((participant) => (   
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

export default AnalysisExpertise;