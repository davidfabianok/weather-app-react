import React from 'react';
import Wheather from './Wheather';

const WheatherStory = {
  title: 'Wheather',
  component: Wheather,
};

export const WheatherExample = () => <Wheather temperature={20} />;

export const WheatherExample2 = () => <Wheather temperature={300} />;

export default WheatherStory;