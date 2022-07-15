import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'antd';

function AdvancedSearch(props) {
  return (
    <Form>
      <h1>Advanced Search</h1>
    </Form>
  );
}

export default connect()(AdvancedSearch);
