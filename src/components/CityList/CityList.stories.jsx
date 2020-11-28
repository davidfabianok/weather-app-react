import React from 'react';
import CityList from './CityList';
import { action } from '@storybook/addon-actions'

const CityListStory = {
  title: 'CityList',
  component: CityList,
};

const cities = [
  { city: 'Buenos  Aires', country: 'Argentina' },
  { city: 'Salta', country: 'Argentina' },
];

export const CityListExample = () => <CityList cities={cities} onClickCity={action('click in city')}/>;

export default CityListStory;
