import React from 'react';
// import './App.css';
import { makeStyles, CssBaseline,createMuiTheme, ThemeProvider } from '@material-ui/core';
// import PageHeader from "../../components/scoreUtils/PageHeader";

import Stats from "./stats";

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
    width: '100%'
  }
})

export default function Statistic() {
  const classes = useStyles();

  
  return (
    <ThemeProvider theme={theme}>
      {/* <SideMenu /> */}
      {/* <div className={classes.appMain}> */}
        {/* <Header /> */}
        
        <Stats />
      {/* </div> */}
      <CssBaseline />
    </ThemeProvider>
  );
}

// export default App;
