import React from 'react';
import testData from '.././data/data';
import RenderTable from '.././components/pages/Table/RenderTableContainer';
import { render, cleanup } from '@testing-library/react';
import { afterEach, describe } from 'jest-circus';

afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

describe('<RenderTable/> test suit', () => {
  test('table is rendered to the screen with data', () => {});
});
