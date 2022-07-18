import React from 'react';
import RenderTablePage from './RenderTableContainer';
import ContinentSelect from './ContinentSelect';
import { filteredData } from '../../../data/mockAPI';

const dataMapped = filteredData.map((item, ind) => (
  <p
    key={ind}
  >{`Office: ${item.asylumOffice}, Citizenship: ${item.citizenship}`}</p>
));

function TableContainer() {
  return (
    <>
      <ContinentSelect />
      <div>{dataMapped}</div>
      {/* <RenderTablePage /> */}
    </>
  );
}

export default TableContainer;
