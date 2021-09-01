import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import NavBar from "../NavBar/NavBar.css"
import { useHistory } from "react-router-dom";


  const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        maxWidth: 55,
        width: '100%',
        backgroundColor: '#fa9d39',
      },
    },
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
  
  const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      color: '#fff',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(16),
      marginRight: theme.spacing(0),
      '&:focus': {
        opacity: 1,
      },
    },
  }))((props) => <Tab disableRipple {...props} />);
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    padding: {
      padding: theme.spacing(0),
    },
    demo2: {
      backgroundColor: '#343d40',
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(0.5),
    },

    // demo3:{
    //     '&:hover':{
    //         backgroundColor:'orange'
    //     }
    // }
  }));
  
  export default function CustomizedTabs() {
    const history = useHistory();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      if(newValue===0)
        <Link to="/">Home</Link>
        
        if(newValue===1)
        <Link to="/About">About</Link>
      console.log(newValue)
    };
  
    return (
      <div className={classes.root}>
        <div className={classes.demo2}>
          <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
            <StyledTab label="Home" className={classes.demo3} onClick={(e) => { history.push("/"); }}/>
            <StyledTab label="About" className={classes.demo3} onClick={(e) => { history.push("/about"); }}/>
            <StyledTab label="Resume" className={classes.demo3} onClick={(e) => { history.push("/resume"); }}/>
            <StyledTab label="Works" className={classes.demo3} onClick={(e) => { history.push("/works"); }}/>
            <StyledTab label="Contact" className={classes.demo3} onClick={(e) => { history.push("/contact"); }}/>
          </StyledTabs>
          <Typography className={classes.padding} />
        </div>
      </div>
    );
  }
