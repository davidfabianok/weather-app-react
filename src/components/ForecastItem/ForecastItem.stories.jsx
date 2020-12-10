import React from 'react';
import ForecastItem from './ForecastItem';

const ForecastItemStories = {
  title: 'ForecastItem',
  component: ForecastItem,
};

export const ForecastItemExample = () => (
  <ForecastItem weekDay="Lunes" hour={23} temperature={34} state="cloud" />
);

export default ForecastItemStories;
