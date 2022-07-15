import React from 'react';
import { data } from '.././data/data';
import RenderTable from '.././components/pages/Table/RenderTableContainer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe } from 'jest-circus';

describe('Render table data to the screen', () => {
  test('[1] asylum office is a string', () => {
    const Testdata = data;
    expect(typeof Testdata.asylumOffice).toBe('string');
  });
});

describe('Citizenship data is a string', () => {
  test('[2] Citizenship column is a string', () => {
    const Testdata = data;
    expect(typeof Testdata.citizenship).toBe('string');
  });
});

describe('Race or Ethnicity data is a string', () => {
  test('[3] Citizenship column is a string', () => {
    const Testdata = data;

    expect(typeof Testdata.raceOrEthnicity).toBe('string');
  });
});
