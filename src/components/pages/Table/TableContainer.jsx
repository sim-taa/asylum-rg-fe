import React, { useEffect, useCallback } from 'react';
import RenderTablePage from './RenderTableContainer';
import AsylumOfficeSelect from './AsylumOfficeSelect';
import ContinentSelect from './ContinentSelect';
import SearchSubmitButton from './SearchSubmitButton';

import { connect } from 'react-redux';
import { getFilteredData } from '../../../state/actions';

const TableContainer = ({ cases, getFilteredData }) => {
  const memoizedGetFilteredData = useCallback(() => {
    getFilteredData('?');
  }, [getFilteredData]);

  useEffect(() => {
    memoizedGetFilteredData();
  }, [memoizedGetFilteredData]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
          backgroundColor: '#f7e4ca',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '15vh',
            alignItems: 'center',
          }}
        >
          <AsylumOfficeSelect />
          <ContinentSelect />
          <SearchSubmitButton />
        </div>
        <RenderTablePage />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  cases: state.dataReducer.cases,
});

export default connect(mapStateToProps, { getFilteredData })(TableContainer);
