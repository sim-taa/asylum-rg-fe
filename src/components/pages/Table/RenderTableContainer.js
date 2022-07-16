import React, { useEffect } from 'react';
import { Table } from 'antd';
import { data } from '../../../data/data';
import { columns } from '../../../data/columns';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { getAllData } from '../../../state/actions';
import AsylumOfficeSelect from './AsylumOfficeSelect';

const useStyles = makeStyles({
  container: {
    margin: '5rem',
  },
});

//data will come in as props and not be hard coded
function RenderTablePage(props) {
  const { asylum, getAllData } = props;
  const classes = useStyles();

  useEffect(() => {
    getAllData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //code block below creates a random amount of state objects on each reload
  const count = Math.floor(Math.random() * 50) + 25;
  const dataArray = [...new Array(count).keys()].map(key => ({
    ...asylum,
    key,
  }));

  return (
    <div>
      <AsylumOfficeSelect />
      <Table
        className={classes.container}
        bordered={true}
        loading={data.length === 0 ? true : false}
        columns={columns}
        dataSource={dataArray}
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
    asylum: state.dataReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllData: () => {
      dispatch(getAllData(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderTablePage);
