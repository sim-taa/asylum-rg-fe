import React from 'react';
import 'antd/dist/antd.css';
import { Select, Popover } from 'antd';
import { officeRegions } from '../../../data/filterConstants';

const { Option } = Select;

const children = [];

officeRegions.forEach(office => {
  children.push(
    <Option key={office.code}>
      <Popover
        placement="right"
        title={`${office.location.city}, ${office.location.state}`}
        content={office.regions.map(region => (
          <p>{region}</p>
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

const handleChange = value => {
  console.log(`selected ${value}`);
};

const asylumOfficeSelect = () => (
  <>
    <Select
      // Uncomment the following line to allow for selection of multiple regions
      //mode="multiple"
      allowClear
      style={{
        textAlign: 'center',
        width: '20em',
      }}
      placeholder="Filter By Office Region"
      defaultValue={[]}
      onChange={handleChange}
    >
      {children}
    </Select>
  </>
);

export default asylumOfficeSelect;
