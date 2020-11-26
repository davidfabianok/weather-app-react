import React from 'react';
import CityInfo from './CityInfo';

const cityInfoStory = {
  title: 'CityInfo',
  component: CityInfo,
};

export const CityExample = () => <CityInfo city="CABA" country="Argentina" />;

export default cityInfoStory;
