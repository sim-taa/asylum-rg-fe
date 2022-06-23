import React from 'react';
import { Table } from 'antd';
import { data } from '../../../data/data';
import { columns } from '../../../data/columns';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    margin: '5rem',
  },
});

//data will come in as props and not be hard coded
function RenderTablePage(props) {
  const classes = useStyles();

  return (
    <div>
      <Table
        className={classes.container}
        bordered={true}
        loading={data.length === 0 ? true : false}
        //columns is how many columns we will have
        columns={columns}
        //datasource is where we get the data from
        dataSource={data}
        //pageSize=number controls number of items per page, default is 10
        //position controls location of pagination, default is
        pagination={{
          //pageSize: 11,
          position: ['bottomCenter'],
        }}
        title={() => 'Tabular View'}
      />
      ;
    </div>
  );
}
export default RenderTablePage;

//onChange function can be used in Table component to filter data
