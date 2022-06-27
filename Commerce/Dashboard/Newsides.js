
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {  Typography,Button } from '@mui/material';

const Newsides = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
    <Box sx={{ width: '100%',display:"flex", flexDirection:"column"}}>
<Typography indicatorColor="primary" mt={2} variant='h5' textAlign="center" color="secondary">
    Virtual/Hybrid Center
</Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        orientation='vertical'
        aria-label=" secondary Vertical tabs example"
        sx = {{borderRight:1,borderColor:"divider", bgColor:"Background.paper"}}
       >

        <Tab value="one" label="Basics"/>
        <Tab value="two" label="Branding" />
        <Tab value="three" label="Agenda" />
        <Tab value="four" label="Virtual/Hybrid Center" />
        <Tab value="five" label="Speaker Center" />
        <Tab value="six" label="Sponser Center" />

      </Tabs>
    </Box>
    
    </>
  )
}

export default Newsides


