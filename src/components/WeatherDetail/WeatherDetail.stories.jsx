import React from 'react';
import WeatherDetail from './WeatherDetail';

const WeatherDetailStory = {
  title: 'WeatherDetail',
  component: WeatherDetail,
};

export const WeatherDetailExample = () => <WeatherDetail humidity={23} wind={23} />;

export default WeatherDetailStory;
