import React from 'react';
import RenderTablePage from './RenderTableContainer';
import MountedTest from './TempMountingPoint';

function TableContainer() {
  return (
    <>
      <MountedTest />
      <RenderTablePage />
    </>
  );
}

export default TableContainer;
