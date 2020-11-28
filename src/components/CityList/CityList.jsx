import React from 'react';
import PropTypes from 'prop-types';
import CityInfo from '../CityInfo';
import Weather from '../Weather';
import { Grid } from '@material-ui/core';

const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry) => {
  const { city, country } = cityAndCountry;

  return (
    <li key={city} onClick={eventOnClickCity}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={8}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Weather temperature={10} state="sunny" />
        </Grid>
      </Grid>
    </li>
  );
};

/**
 const CityList = ({ cities, onClickCity }) => (
  <ul>{cities.map((cityAndCountry) => renderCityAndCountry(onClickCity)(cityAndCountry))}</ul>
); 
 */

// Refactor: !hace que la funcion onClikCity no se renderice cade ves que cambien CityAndCountry

const CityList = ({ cities, onClickCity }) => {
  const auxFunc = renderCityAndCountry(onClickCity);

  return <ul>{cities.map((cityAndCountry) => auxFunc(cityAndCountry))}</ul>;
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
