import React from "react";

function MarketForDay(props) {
  return (
    <React.Fragment>
      <h3>{props.day}</h3>
      <ul>
        <li>Location: {props.location}</li>
        <li>Hours: {props.hours}</li>
        <li>Booth: {props.booth}</li>
      </ul>
    </React.Fragment>
  );
}

export default MarketForDay;