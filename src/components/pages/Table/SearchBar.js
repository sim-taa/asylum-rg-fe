import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { columns } from '../../../data/columns';
import { connect } from 'react-redux';
import { filterSearch } from '../../../state/actions';

function SearchBar(props) {
  const { asylum, filteredData, filteredCount, filterSearch } = props;

  const { Option } = Select;
  const [form] = Form.useForm();

  function onCategoryChange(value) {
    form.setFieldsValue({ category: value });
  }

  function onSubmit(values) {
    const { searchTerm, category } = values;
    const data = filteredCount === 0 ? asylum : filteredData;

    filterSearch({ data, searchTerm, category });
    form.resetFields();
  }

  function reset() {
    form.resetFields();
  }

  return (
    <Form
      form={form}
      name="basic-searchbar"
      onFinish={onSubmit}
      autoComplete="off"
      initialValues={{ searchTerm: '', category: '' }}
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
        <Select
          placeholder="Pick A Category"
          onChange={onCategoryChange}
          allowClear
        >
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
    asylum: reducerState.asylumReducer,
    filteredData: filteredReducer.data,
    filteredCount: filteredReducer.count,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterSearch: ({ data, searchTerm, category }) => {
      dispatch(filterSearch({ data, searchTerm, category }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
