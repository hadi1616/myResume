import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import { useHistory } from "react-router-dom"; //i can make the nav bar sticky to but it on the home component and stay scrolling down to the other components
import '../NavBar/NavBar.css'


const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: 'rgb(248, 242, 242)  ',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(14),
    // marginRight: theme.spacing(1),
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      marginRight: theme.spacing(0),
      marginLeft:theme.spacing(-1),
      fontSize: theme.typography.pxToRem(8),
    },
    '&:focus': {
      opacity: 1,
      color: '#0000',
      // color:'#db5688',
      // color:'#d1f257',
      // fontWeight: '650'
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
    backgroundColor: '#272727',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0),
    position: 'sticky',
  },
  
}));

export default function CustomizedTabs() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.demo2}>
        <StyledTab label="Home" className={classes.indicator} className={"Home"} onClick={(e) => { history.push("/"); }} />
        <StyledTab label="About & Resume" className={classes.indicator} className={"About & Resume"} onClick={(e) => { history.push("/about"); }} />
        <StyledTab label="Education" className={classes.indicator} className={"Education"} onClick={(e) => { history.push("/education"); }} />
        <StyledTab label="Projects" className={classes.indicator} className={"Projects"} onClick={(e) => { history.push("/projects"); }} />
        <StyledTab label="Experience" className={classes.deindicatormo3} className={"Experience"} onClick={(e) => { history.push("/experience"); }} />
      </div>
    </div>

  );
}
