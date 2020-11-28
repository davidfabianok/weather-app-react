import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';

const WeatherDetail = ({ humidity, wind }) => {
  return (
    <Grid container>
      <Typography>Humedad: {humidity}%</Typography>
      <Typography>Viento: {wind} km/h</Typography>
    </Grid>
  );
};

WeatherDetail.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
};

export default WeatherDetail;
