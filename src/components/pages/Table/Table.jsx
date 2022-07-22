import React from 'react';
import { Table } from 'antd';
import { columns } from '../../../data/columns';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    cases: state.dataReducer.cases,
  };
};

function DataTable({ cases }) {
  return (
    <div>
      <Table
        style={{
          margin: '5rem',
        }}
        bordered={true}
        loading={cases.length === 0 ? true : false}
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

export default connect(mapStateToProps)(DataTable);
