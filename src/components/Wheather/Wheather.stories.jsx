import React from 'react';
import Wheather from './Wheather';

const WheatherStory = {
  title: 'Wheather',
  component: Wheather,
};

export const WheatherCloud = () => <Wheather temperature={20} state="cloud" />;

export const WheatherCloudy = () => <Wheather temperature={300} state="cloudy" />;

export const WheatherFog = () => <Wheather temperature={300} state="fog" />;

export const WheatherSunny = () => <Wheather temperature={300} state="sunny" />;

export const WheatherRain = () => <Wheather temperature={300} state="rain" />;



export default WheatherStory;