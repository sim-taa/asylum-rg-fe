import React from 'react';
import { connect } from 'react-redux';
import {
  inputChange,
  filterSearch,
  filterCategories,
  resetFilter,
} from '../../../state/actions';

function SearchBar(props) {
  const {
    asylum,
    categories,
    filteredData,
    filteredCount,
    filterCategories,
    filterSearch,
    form,
    inputChange,
    resetFilter,
  } = props;

  function onChange(evt) {
    const { name, value } = evt.target;
    const formValues = { name, value };
    inputChange(formValues);
  }

  function onSubmit(evt) {
    evt.preventDefault();

    const data = filteredCount === 0 ? asylum : filteredData;
    const searchTerm = form.searchTerm;
    const searchCategory = form.category;

    filterSearch({ data, searchTerm, searchCategory });
    filterCategories(categories, searchCategory);
  }

  return (
    <form id="searchBar">
      <label>
        {' '}
        Search Term
        <input
          id="searchTerm"
          name="searchTerm"
          type="text"
          value={form.searchTerm}
          onChange={onChange}
        ></input>
      </label>
      <select
        onChange={onChange}
        value={form.category}
        name="category"
        id="category"
      >
        <option value="null">Pick A Category</option>
        {categories.map(category => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <button id="submitBtn" onClick={onSubmit}>
        Search/Filter🔎
      </button>
      <button id="resetBtn" onClick={() => resetFilter()}>
        Reset Search
      </button>
    </form>
  );
}

const mapStateToProps = state => {
  const reducerState = state.dataReducer;
  const filteredReducer = reducerState.filteredReducer;

  return {
    asylum: reducerState.asylumReducer,
    categories: filteredReducer.categories,
    filteredData: filteredReducer.data,
    filteredCount: filteredReducer.count,
    form: reducerState.formReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputChange: ({ name, value }) => {
      dispatch(inputChange({ name, value }));
    },
    filterSearch: ({ data, searchTerm, searchCategory }) => {
      dispatch(filterSearch({ data, searchTerm, searchCategory }));
    },
    filterCategories: (categories, searchCategory) => {
      dispatch(filterCategories(categories, searchCategory));
    },
    resetFilter: () => {
      dispatch(resetFilter());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
