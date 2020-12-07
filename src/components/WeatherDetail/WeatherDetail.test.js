import React from 'react';
import { render } from '@testing-library/react';
import WeatherDetail from './WeatherDetail';


test('weatherDetail render', async () => {

  const { findByText } = render(<WeatherDetail humidity={80} wind={10} />);

  const wind = await findByText(/10/);
  const humidity = await findByText(/80/);

  expect(humidity).toHaveTextContent('Humedad: 80%');
  expect(wind).toHaveTextContent('Viento: 10 km/h');

});
