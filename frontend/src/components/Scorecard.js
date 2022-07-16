import React from 'react';
// import './App.css';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
// import PageHeader from "../../components/scoreUtils/PageHeader";

import Participants from "./Participant";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    // padding: '0' , 'auto'
    width: '100%'
  }
})

export default function Scorecard() {
  const classes = useStyles();

  
  return (
    <ThemeProvider theme={theme}>
      {/* <SideMenu /> */}
      {/* <div className={classes.appMain}> */}
        {/* <Header /> */}
        
        <Participants />
      {/* </div> */}
      <CssBaseline />
    </ThemeProvider>
  );
}

// export default App;
