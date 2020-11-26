import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const Wheather = ({ temperature }) => {
  return <Typography variant="h2">{temperature}</Typography>;
};

Wheather.propTypes = {
  temperature: PropTypes.number.isRequired,
};

export default Wheather;
