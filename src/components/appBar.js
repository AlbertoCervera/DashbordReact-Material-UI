import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1,}}>
      <AppBar position="static" sx={{height: "9vh", maxHeight: "9vh", display: "flex",justifyContent: "center"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/"  color="white" underline="none" >Auttic</Link>
          </Typography>
          <Button color="inherit">Cerrar Sesión</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}