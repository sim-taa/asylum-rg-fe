import React from 'react';
import { connect } from 'react-redux';
import { Form, Checkbox, Button } from 'antd';

/** Form Structure
 * Each category should be present to take in values
 * asylum office: [],
 * citizenship: [],
 * Race: [],
 * Case Outcome: [],
 * completion:"Date to Date"
 *
 * Run data to only filter asylumdata in total.
 */

function AdvancedSearch(props) {
  // console.log(props);
  const { asylum } = props;
  const [form] = Form.useForm();

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
    console.log(values);
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

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Get Results🔎
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
