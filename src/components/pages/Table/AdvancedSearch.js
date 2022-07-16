import React from 'react';
import { connect } from 'react-redux';
import { Form, Checkbox, Button, DatePicker } from 'antd';

function AdvancedSearch(props) {
  const { asylum } = props;
  const [form] = Form.useForm();
  const { RangePicker } = DatePicker;
  const asylumOfficeOptions = [];
  const citizenshipOptions = [];
  const raceOrEthnicityOptions = [];
  const caseOutcomeOptions = [];

  asylum.forEach(entry => {
    if (!asylumOfficeOptions.includes(entry.asylumOffice)) {
      asylumOfficeOptions.push(entry.asylumOffice);
    }

    if (!citizenshipOptions.includes(entry.citizenship)) {
      citizenshipOptions.push(entry.citizenship);
    }

    if (!raceOrEthnicityOptions.includes(entry.raceOrEthnicity)) {
      raceOrEthnicityOptions.push(entry.raceOrEthnicity);
    }

    if (!caseOutcomeOptions.includes(entry.caseOutcome)) {
      caseOutcomeOptions.push(entry.caseOutcome);
    }
  });

  function onFinish(values) {
    const {
      asylumOffice,
      citizenship,
      raceOrEthnicity,
      caseOutcome,
      completionDate,
    } = values;

    const completion = [
      completionDate[0].format('YYYY-MM-DD'),
      completionDate[1].format('YYYY-MM-DD'),
    ];

    // Filter action for advanced filter({
    //   asylumOffice,
    //   citizenship,
    //   raceOrEthnicity,
    //   caseOutcome,
    //   completion
    // })
  }

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item label="Asylum Office" name="asylumOffice">
        <Checkbox.Group options={asylumOfficeOptions} />
      </Form.Item>

      <Form.Item label="Citizenship" name="citizenship">
        <Checkbox.Group options={citizenshipOptions} />
      </Form.Item>

      <Form.Item label="Race/Ethnicity" name="raceOrEthnicity">
        <Checkbox.Group options={raceOrEthnicityOptions} />
      </Form.Item>

      <Form.Item label="Case Outcome" name="caseOutcome">
        <Checkbox.Group options={caseOutcomeOptions} />
      </Form.Item>

      <Form.Item label="Completion Date" name="completionDate">
        <RangePicker />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Get Advanced Results🔎
        </Button>
      </Form.Item>
    </Form>
  );
}

const mapStateToProps = state => {
  return {
    asylum: state.dataReducer,
  };
};

export default connect(mapStateToProps)(AdvancedSearch);
