import React from 'react';
import CityList from './CityList';

const CityListStory = {
  title: 'CityList',
  component: CityList,
};
 

const cities = [{city: "Buenos  Aires", country: "Argentina"}, {city: "Salta", country: "Argentina"}];
export const CityListExample = () => <CityList cities={cities} />;

export default CityListStory;
