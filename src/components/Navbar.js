import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import CollectionsIcon from '@mui/icons-material/Collections';

const Navbar = () => {
  return (
    <>
    <AppBar position="fixed">
      <Toolbar>
        <Grid container>
          <Grid item xs={6}>
            <CollectionsIcon /> 
          </Grid>
          <Grid item xs={6}>
          <Typography variant='h6' component="div">Site Title</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar