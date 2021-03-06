import React from 'react';
//import buildcontrols from '../BuildControls';
import classes from './BuildControl.css';
const buildcontrol = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
);

export default buildcontrol;
