import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchForm } from '../../../data/data';
function SearchBar(props) {
  const { filteredCount, filteredData } = props;
  const [searchValues, setSearchValues] = useState(searchForm);

  console.log(props);
  console.log(searchValues);

  return (
    <div id="searchBar">
      <input
        id="searchTerm"
        name="searchTerm"
        type="text"
        placeholder="Enter Search Term Here"
        aria-label="Search Term Text Box"
        value={searchValues.searchTerm}
      ></input>
    </div>
  );
}

const mapStateToProps = state => {
  const asylumState = state.dataReducer.asylum;
  const filteredDataState = state.dataReducer.filteredData;
  const filteredCountState = state.dataReducer.filteredCount;

  return {
    asylum: asylumState,
    filteredData: filteredDataState,
    filteredCount: filteredCountState,
  };
};

export default connect(mapStateToProps)(SearchBar);
