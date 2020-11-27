import React from 'react'
import Wheather from './Wheather';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('weather render sunny', async () => {
    
    const { findByRole } = render(<Wheather temperature={10} state="sunny"/>);

    const  temp = await findByRole("heading");

    expect(temp).toHaveTextContent(10);
})


test('weather render cloud', async () => {
    
    const { findByRole } = render(<Wheather temperature={20} state="cloud"/>);

    const  temp = await findByRole("heading");

    expect(temp).toHaveTextContent(20);
})