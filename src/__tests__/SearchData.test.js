import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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

//creates store for testing redux can be moved to separate component if needed and imported in
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

describe('searching through data shows correct filtered data, advanced search', () => {
  test('Should render App without crashing', async () => {
    renderWithRedux(<TableContainer />);
  });

  test('shows original data of 25 entries', () => {
    const tableRows = document.querySelectorAll('.ant-table-row');
    expect(tableRows.length).toBe(25);
  });

  test('shows correct number of results when filtering zch and chad and Deny,Referral', async () => {
    const advancedSearchButton = screen.getByTestId('advancedSearch');
    userEvent.click(advancedSearchButton);
    await waitFor(() => {}); //must use await waitFor when user changes state
    const checkboxZch = screen.getByLabelText('zch');
    const checkboxChad = screen.getByLabelText('CHAD');
    const checkboxDeny = screen.getByLabelText('Deny/Referral');
    const submitAdvanced = screen.getByTestId('submitAdvancedSearch');
    userEvent.click(checkboxZch);
    userEvent.click(checkboxChad);
    userEvent.click(checkboxDeny);
    userEvent.click(submitAdvanced);
    await waitFor(() => {});
    const tableRows = document.querySelectorAll('.ant-table-row');
    //cant do exact because api does random cases update this when api is merged
    expect(tableRows.length).toBeLessThan(25);
  });

  test('when you click reset term filter, all the cases show', async () => {
    const advancedSearchButton = screen.getByTestId('advancedSearch');
    userEvent.click(advancedSearchButton);
    await waitFor(() => {});
    const checkboxZch = screen.getByLabelText('zch');
    const checkboxChad = screen.getByLabelText('CHAD');
    const checkboxDeny = screen.getByLabelText('Deny/Referral');
    const submitAdvanced = screen.getByTestId('submitAdvancedSearch');
    userEvent.click(checkboxZch);
    userEvent.click(checkboxChad);
    userEvent.click(checkboxDeny);
    userEvent.click(submitAdvanced);
    await waitFor(() => {});
    let tableRows = document.querySelectorAll('.ant-table-row');
    expect(tableRows.length).toBeLessThan(25);

    const resetFilter = screen.getByTestId('resetFiltered');
    userEvent.click(resetFilter);
    await waitFor(() => {});
    tableRows = document.querySelectorAll('.ant-table-row');

    expect(tableRows.length).toBe(25);
  });
});
