import React from 'react';
import { render } from '@testing-library/react';
import CityList from './CityList'; // SUT: Subject under testing (objeto del testeo)


const cities = [{city: "Buenos  Aires", country: "Argentina"}, {city: "Salta", country: "Argentina"}];

test('citylist renders ', async () => {
    
    const {findAllByRole} = render(<CityList cities={cities} />);
    const items = await findAllByRole("listitem");

    expect(items).toHaveLength(2);


})
