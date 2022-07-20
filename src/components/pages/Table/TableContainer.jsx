import React, { useEffect } from 'react';
import RenderTablePage from './RenderTableContainer';
import AsylumOfficeSelect from './AsylumOfficeSelect';
import ContinentSelect from './ContinentSelect';
import SearchSubmitButton from './SearchSubmitButton';

import { connect } from 'react-redux';
import { getFilteredData } from '../../../state/actions';

const TableContainer = ({ cases, getFilteredData }) => {
  useEffect(() => {
    getFilteredData('?');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AsylumOfficeSelect />
      <ContinentSelect />
      <SearchSubmitButton />
      <RenderTablePage />
    </>
  );
};

const mapStateToProps = state => ({
  cases: state.dataReducer.cases,
});

export default connect(mapStateToProps, { getFilteredData })(TableContainer);
