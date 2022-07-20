import React from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { getFilteredData } from '../../../state/actions';
import { buildQueryString } from '../../../state/reducers/filterReducer';
import { connect } from 'react-redux';

function SearchSubmitButton({ filters, getFilteredData }) {
  return (
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
