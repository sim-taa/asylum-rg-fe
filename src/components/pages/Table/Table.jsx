import React from 'react';
import { Table } from 'antd';
import { data } from '../../../data/data';
import { columns } from '../../../data/columns';
import { connect } from 'react-redux';

function DataTable({ cases }) {
  return (
    <div>
      <Table
        style={{
          margin: '5rem',
        }}
        bordered={true}
        loading={data.length === 0 ? true : false}
        //As table rendering becomes dynamic, the needed columns will have to be destructured
        columns={columns}
        dataSource={cases.map((record, index) => ({ ...record, key: index }))}
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
  };
};

export default connect(mapStateToProps)(DataTable);
