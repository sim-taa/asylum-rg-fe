import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { columns } from '../../../data/columns';
import { connect } from 'react-redux';
import { filterSearch, resetData } from '../../../state/actionCreators';

function SearchBar(props) {
  const { cases, filteredData, filteredCount, filterSearch, resetData } = props;

  const { Option } = Select;
  const [form] = Form.useForm();

  function onCategoryChange(value) {
    form.setFieldsValue({ category: value });
  }

  function onSubmit(values) {
    const { searchTerm, category } = values;
    const data = filteredCount === 0 ? cases : filteredData;

    filterSearch({ data, searchTerm, category });
    form.resetFields();
  }

  function reset() {
    resetData();
    form.resetFields();
  }

  return (
    <Form
      form={form}
      name="searchBar"
      onFinish={onSubmit}
      autoComplete="off"
      layout="inline"
      wrapperCol={{ span: 45 }}
    >
      {/* Basic Search(will move to another component) */}
      <Form.Item
        label="Search Term"
        name="searchTerm"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="category" label="Category" rules={[{ required: true }]}>
        <Select placeholder="Pick A Category" onChange={onCategoryChange}>
          {columns.map(column => (
            <Option value={column.dataIndex}>{column.title}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search/Filter🔎
        </Button>
        <Button htmlType="button" onClick={reset}>
          Reset Search Terms
        </Button>
      </Form.Item>
    </Form>
  );
}

const mapStateToProps = state => {
  const reducerState = state.dataReducer;
  const filteredReducer = reducerState.filteredReducer;

  return {
    cases: reducerState.casesReducer,
    filteredData: filteredReducer.data,
    filteredCount: filteredReducer.count,
  };
};

export default connect(mapStateToProps, { filterSearch, resetData })(SearchBar);
