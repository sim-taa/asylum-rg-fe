import React from 'react';
import { connect } from 'react-redux';
import { setDateFilterFormat } from '../../../state/actions';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import '../../../styles/FilterMenuStyles/DateFormatSelect.less';

const { Option } = Select;

const mapStateToProps = state => ({
  isFiscalYear: state.filterReducer.isFiscalYear,
});

const DateFormatSelect = ({ isFiscalYear, setDateFilterFormat }) => (
  <Select
    bordered={false}
    value={isFiscalYear ? 'fiscalYear' : 'calendarYear'}
    onChange={() => setDateFilterFormat(!isFiscalYear)}
  >
    <Option value="calendarYear">Calendar Year</Option>
    <Option value="fiscalYear">Fiscal Year</Option>
  </Select>
);

export default connect(mapStateToProps, { setDateFilterFormat })(
  DateFormatSelect
);
