import React from 'react';
import { render } from '@testing-library/react';
import CityInfo from './CityInfo'; // SUT: Subject under testing (objeto del testeo)

test('should cityInfo render', async () => {
  // AAA
  // Arrange
  // Act
  // Assert
  const cityInfoData = {
      city: "Buenos Aires",
      country: "Argentina"
  }

  const { findAllByRole } = render(<CityInfo city={cityInfoData.city} country={cityInfoData.country} />);

  const cityAndCountryComponents = await findAllByRole('heading');

  expect(cityAndCountryComponents[0]).toHaveTextContent(cityInfoData.city); //macher => comparador
  expect(cityAndCountryComponents[1]).toHaveTextContent(cityInfoData.country);
});
