import React from 'react';
import data from '.././data/data';
import RenderTable from '.././components/pages/Table/RenderTableContainer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe } from 'jest-circus';

// describe("Render table data to the screen", () => {
//     test("[1] asylum office is a string", () => {
//         const input = "AyS";
//         const expected = "AyS";
//         const actual = "";
//         expect.stringContaining(input);
//     });
// });

describe('Citizenship data is a string', () => {
  test('[2] Citizenship column is a string', () => {
    const Testdata = data;
    // const expected = { citizenship: "h" };
    // const actual = screen.getByText(data.citizenship);
    expect(typeof Testdata.citizenship).toBe('string');
  });
});
