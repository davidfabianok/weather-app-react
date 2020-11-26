import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { WiCloud } from 'react-icons/wi';
import { IconContext } from 'react-icons';

const Wheather = ({ temperature }) => {
  return (
    <div>
      <IconContext.Provider value={{ size: '5em' }}>
        <WiCloud />
      </IconContext.Provider>
      <Typography display="inline" variant="h3">
        {temperature}
      </Typography>
    </div>
  );
};

Wheather.propTypes = {
  temperature: PropTypes.number.isRequired,
};

export default Wheather;
