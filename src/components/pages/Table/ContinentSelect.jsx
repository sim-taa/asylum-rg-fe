import React from 'react';
import { connect } from 'react-redux';
import { setContinentFilter } from '../../../state/actions';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { continentEnum } from '../../../data/filterConstants';

const { Option } = Select;

const mapStateToProps = state => ({
  continents: state.filterReducer.continents,
});

const continentOptions = Object.values(continentEnum).map(continent => (
  <Option key={continent}>{continent}</Option>
));

const ContinentSelect = ({ continents, setContinentFilter }) => {
  const dispatchChange = continentArray => {
    setContinentFilter(
      typeof continentArray === 'string' ? [continentArray] : continentArray
    );
  };
  return (
    <Select
      // Uncomment the following line to allow for selection of multiple regions
      mode="multiple"
      allowClear
      style={{
        textAlign: 'center',
        width: '15em',
      }}
      placeholder="Filter By Continent"
      defaultValue={[]}
      onChange={dispatchChange}
    >
      {continentOptions}
    </Select>
  );
};

export default connect(mapStateToProps, { setContinentFilter })(
  ContinentSelect
);
