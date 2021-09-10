import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import { useHistory } from "react-router-dom"; //i can make the nav bar sticky to but it on the home component and stay scrolling down to the other components



const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(14),
    marginRight: theme.spacing(1),
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
        <StyledTab label="Home" className={classes.indicator} onClick={(e) => { history.push("/"); }} />
        <StyledTab label="About & Resume" className={classes.indicator} onClick={(e) => { history.push("/about"); }} />
        <StyledTab label="Education" className={classes.indicator} onClick={(e) => { history.push("/education"); }} />
        <StyledTab label="Works" className={classes.indicator} onClick={(e) => { history.push("/works"); }} />
        <StyledTab label="Contact" className={classes.deindicatormo3} onClick={(e) => { history.push("/contact"); }} />
      </div>
    </div>

  );
}
