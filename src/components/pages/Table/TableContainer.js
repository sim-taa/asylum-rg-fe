import React from 'react';
import RenderTablePage from './RenderTableContainer';
import ContinentSelect from './ContinentSelect';

function TableContainer() {
  return (
    <>
      <ContinentSelect />
      <RenderTablePage />
    </>
  );
}

export default TableContainer;
