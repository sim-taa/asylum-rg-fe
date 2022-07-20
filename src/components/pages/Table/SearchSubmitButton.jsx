import React from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { getFilteredData } from '../../../state/actions';
import { buildQueryString } from '../../../state/reducers/filterReducer';
import { connect } from 'react-redux';

function SearchSubmitButton({ filters, getFilteredData }) {
  return (
    //A slice of state should be added to the redux store to indicated loading
    //Loading animation can be managed within the button component, though an
    //app-wide loading indicator would be less work and more consistent
    //See if somebody can use d3 to make an svg grouping of the HRF logo and
    //Animate it with d3 awesome transition powers
    <Button
      type="primary"
      icon={<SearchOutlined />}
      onClick={() => getFilteredData(buildQueryString(filters))}
    >
      Search
    </Button>
  );
}

const mapStateToProps = state => {
  return {
    filters: state.filterReducer,
  };
};

export default connect(mapStateToProps, { getFilteredData })(
  SearchSubmitButton
);
