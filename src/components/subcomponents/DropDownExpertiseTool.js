import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CssBaseline from '@mui/material/CssBaseline';

export default function SelectLabels() {
  const [toolValue, setTool] = React.useState('');

  const handleChange = (event) => {
    setTool(event.target.value);
  };

  /*return (
  );*/
  
}