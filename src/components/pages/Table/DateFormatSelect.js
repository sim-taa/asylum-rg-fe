import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import '../../../styles/FilterMenuStyles/DateFormatSelect.less';

const { Option } = Select;

const handleChange = value => {
  console.log(`selected ${value}`);
};

const DateFormatSelect = () => (
  <Select bordered={false} defaultValue="calendarYear" onChange={handleChange}>
    <Option value="calendarYear">Calendar Year</Option>
    <Option value="fiscalYear">Fiscal Year</Option>
  </Select>
);

export default DateFormatSelect;
