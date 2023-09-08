import React from 'react';
import {Typography, Container} from '@mui/material';

function Footer() {

  return (
    <footer style={{margin: '4%'}}>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Kriti Srivastava. All rights reserved.
        </Typography>
        <Typography variant="body1" align="center">
          Made with love and utmost care!
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
