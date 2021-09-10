import React from "react";
import '../progress/Progress.css'

const ProgressBar = (props) => {
  const { bgcolor, completed, language } = props;

  const containerStyles = {
    height: 21,
    width: '30%',
    backgroundColor: "#e0e0de",
    borderRadius: '7px',
    margin: 47
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: '7px',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    // <div className={"ProgressBar"}>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
          <span style={labelStyles}>{`${language}`}</span>
        </div>
      </div>
    // </div>
  );
};

export default ProgressBar;