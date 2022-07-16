import React from 'react';
import { connect } from 'react-redux';
import { setAsylumOfficeFilter } from '../../../state/actions';
import 'antd/dist/antd.css';
import { Select, Popover } from 'antd';
import { officeRegions } from '../../../data/filterConstants';

const { Option } = Select;

const mapStateToProps = state => ({
  asylumOffice: state.filterReducer.asylumOffice,
});

const children = [];

officeRegions.forEach(office => {
  children.push(
    <Option key={office.code}>
      <Popover
        placement="right"
        title={`${office.location.city}, ${office.location.state}`}
        content={office.regions.map(region => (
          <p key={region}>{region}</p>
        ))}
        trigger="hover"
      >
        <p
          style={{ textAlign: 'center' }}
        >{`${office.location.city}, ${office.location.state}`}</p>
        {/*To enable selection of multiple regions, replace the preceding line with this:*/}
        {/* <p style={{ textAlign: 'center' }}>{office.location.state}</p> */}
      </Popover>
    </Option>
  );
});

const AsylumOfficeSelect = ({ asylumOffice, setAsylumOfficeFilter }) => {
  const handleChange = value => {
    setAsylumOfficeFilter(value);
  };
  return (
    <Select
      // Uncomment the following line to allow for selection of multiple regions
      //mode="multiple"
      allowClear
      style={{
        textAlign: 'center',
        width: '15em',
      }}
      placeholder="Filter By Office Region"
      defaultValue={[]}
      onChange={handleChange}
      // value={asylumOffice}
      // onChange={ (e) => setAsylumOfficeFilter(e.target.value)}
    >
      {children}
    </Select>
  );
};

export default connect(mapStateToProps, { setAsylumOfficeFilter })(
  AsylumOfficeSelect
);
