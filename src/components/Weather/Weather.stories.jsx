import React from 'react';
import Weather from './Weather';

const WeatherStory = {
  title: 'Weather/Weather',
  component: Weather,
};

export const WeatherCloud = () => <Weather temperature={20} state="cloud" />;

export const WeatherCloudy = () => <Weather temperature={300} state="cloudy" />;

export const WeatherFog = () => <Weather temperature={300} state="fog" />;

export const WeatherSunny = () => <Weather temperature={300} state="sunny" />;

export const WeatherRain = () => <Weather temperature={300} state="rain" />;

export default WeatherStory;
