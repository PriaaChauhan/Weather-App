import React from 'react';
import weatherGif from './weather.gif'; 
function WeatherComponent() {
  return (
    <div>
      
      <img src={weatherGif} alt="Weather animation" style={{ width: '170px', height: 'auto' }} />

    </div>
  );
}

export default WeatherComponent;
