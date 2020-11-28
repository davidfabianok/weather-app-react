import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CityList from './CityList'; // SUT: Subject under testing (objeto del testeo)

const cities = [
  { city: 'Buenos  Aires', country: 'Argentina' },
  { city: 'Salta', country: 'Argentina' },
];

test('citylist renders ', async () => {
  const clickOnitem = jest.fn();
  const { findAllByRole } = render(<CityList cities={cities} onClickCity={clickOnitem}/>);
  const items = await findAllByRole('listitem');

  expect(items).toHaveLength(2);
});

test('cityList click on item', async () => {
  const clickOnitem = jest.fn();

  const { findAllByRole } = render(<CityList cities={cities} onClickCity={clickOnitem} />);

  const items = await findAllByRole('listitem');
  fireEvent.click(items[0]);

  expect(clickOnitem).toHaveBeenCalledTimes(1);
});
