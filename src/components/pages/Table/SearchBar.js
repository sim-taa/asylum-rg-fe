import React from 'react';
import { connect } from 'react-redux';
import { inputChange } from '../../../state/actions';

function SearchBar(props) {
  const {
    asylum,
    categories,
    filteredData,
    filteredCount,
    form,
    inputChange,
  } = props;

  function onChange(evt) {
    const { name, value } = evt.target;
    const formValues = { name, value };
    inputChange(formValues);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    // Add in filter reducer action here
  }

  return (
    <form id="searchBar" onSubmit={onSubmit}>
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
          return <option value={category}>{category}</option>;
        })}
      </select>
      <button id="submitBtn" onClick={onSubmit}>
        🔎
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
