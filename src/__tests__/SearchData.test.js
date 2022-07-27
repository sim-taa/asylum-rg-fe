import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import TableContainer from '../components/pages/Table/TableContainer';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../state/reducers';

//anywhere you test antd you must add this window.matchMedia
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducers, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

beforeEach(() => {
  renderWithRedux(<TableContainer />);
});
describe('searching through data shows correct filtered data, basic search', () => {
  test('Should render App without crashing', async () => {
    renderWithRedux(<TableContainer />);
  });

  test('shows original data of 25 entires', () => {
    const tableRows = document.querySelectorAll('.ant-table-row');
    expect(tableRows.length).toBe(25);
  });
  test('shows 4 results when filtering zch and south sudan and grant', async () => {
    const searchTerm = document.querySelector('#searchBar_searchTerm');
    const category = document.querySelector('#searchBar_category');
    const filterByTerm = screen.getByTestId('filter');
    act(() => {
      userEvent.type(searchTerm, 'zch');
      userEvent.selectOptions(category, 'Asylum Office');
      userEvent.click(filterByTerm);
      userEvent.type(searchTerm, 'Malawi');
      userEvent.selectOptions(category, 'Citizenship');
      userEvent.click(filterByTerm);
    });
  });
});
