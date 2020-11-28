import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi';
import { IconContext } from 'react-icons';

const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain,
};

const renderState = (state) => {
  const IconState = stateByName[state] || stateByName['sunny'];
  return <IconState />;
};

const Weather = ({ temperature, state }) => {
  return (
    <div>
      <IconContext.Provider value={{ size: '5em' }}>{renderState(state)}</IconContext.Provider>
      <Typography display="inline" variant="h3">
        {temperature}
      </Typography>
    </div>
  );
};

const validValues = ['cloud', 'cloudy', 'fog', 'sunny', 'rain'];

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validValues).isRequired,
};

export default Weather;
