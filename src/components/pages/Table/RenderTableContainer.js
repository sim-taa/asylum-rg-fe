import React, { useEffect } from 'react';
import { Table } from 'antd';
import { data } from '../../../data/data';
import { columns } from '../../../data/columns';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { setAllData } from '../../../state/actions';

const useStyles = makeStyles({
  container: {
    margin: '5rem',
  },
});

//data will come in as props and not be hard coded
function RenderTablePage(props) {
  const { asylum, setAllData } = props;
  const classes = useStyles();

  useEffect(() => {
    setAllData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const count = Math.floor(Math.random() * 20) + 1;
  const dataArray = [...new Array(count).keys()].map(key => ({
    ...asylum,
    key,
  }));

  return (
    <div>
      <Table
        className={classes.container}
        bordered={true}
        loading={data.length === 0 ? true : false}
        columns={columns}
        dataSource={dataArray}
        pagination={{
          position: ['bottomCenter'],
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
    setAllData: () => {
      dispatch(setAllData(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderTablePage);
