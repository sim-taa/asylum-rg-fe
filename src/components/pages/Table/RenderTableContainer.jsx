import React from 'react';
import { Table } from 'antd';
import { columns } from '../../../data/columns';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function RenderTablePage(props) {
  const { cases, filteredCount, filteredData } = props;

  return (
    <div>
      <SearchBar />
      <Table
        style={{
          margin: '5rem',
        }}
        bordered={true}
        loading={cases.length === 0 ? true : false}
        columns={columns}
        dataSource={
          filteredCount === 0
            ? cases.map((record, index) => ({ ...record, key: index }))
            : filteredData
        }
        scroll={{ y: 550 }}
        pagination={{
          position: ['bottomCenter'],
          pageSize: 25,
        }}
        title={() => 'Tabular View'}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cases: state.apiDataReducer.cases,
    filteredData: state.dataReducer.filteredReducer.data,
    filteredCount: state.dataReducer.filteredReducer.count,
  };
};

export default connect(mapStateToProps)(RenderTablePage);
