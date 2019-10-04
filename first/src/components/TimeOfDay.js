import React from 'react';

const TimeOfDay = () => {

  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  const style ={
    fontSize: 24
  }

  if (hours < 12) {
    timeOfDay = "morning";
    style.color = "#04756f";
  }
  else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    style.color = "#8914a3";
  }
  else {
    timeOfDay = "night";
    style.color = "#d90000";
  }

  return (
    <div>
      <p style={style}>Good {timeOfDay}</p>
    </div>
  );
}

export default TimeOfDay;
