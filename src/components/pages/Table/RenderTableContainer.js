import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Asylum Office',
    dataIndex: 'asylumOffice',
    key: 'asylumOffice',
  },
  {
    title: 'Citizenship',
    dataIndex: 'citizenship',
    key: 'citizenship',
  },
  {
    title: 'Race or Ethnicity',
    dataIndex: 'raceOrEthnicity',
    key: 'raceOrEthnicity',
  },
  {
    title: 'Case Outcome',
    dataIndex: 'caseOutcome',
    key: 'caseOutcome',
  },
  {
    title: 'Completion',
    dataIndex: 'completion',
    key: 'completion',
  },
  {
    title: 'Current Date',
    dataIndex: 'currentDate',
    key: 'currentDate',
  },
];

//todo do we need a key/id?
const data = [
  {
    key: '1',
    asylumOffice: 'AyS',
    citizenship: 'h',
    raceOrEthnicity: 'other',
    caseOutcome: 'pending',
    completion: 'n',
    currentDate: 'f',
  },
  {
    key: '2',
    asylumOffice: 'AWS',
    citizenship: 'A',
    raceOrEthnicity: 'other',
    caseOutcome: 'pending',
    completion: 'Y',
    currentDate: 'e',
  },
  {
    key: '3',
    asylumOffice: 'AyS',
    citizenship: 'h',
    raceOrEthnicity: 'latino',
    caseOutcome: 'pending',
    completion: 's',
    currentDate: 'f',
  },
  {
    key: '4',
    asylumOffice: 'AyS',
    citizenship: 'h',
    raceOrEthnicity: 'latino',
    caseOutcome: 'pending',
    completion: 's',
    currentDate: 'f',
  },
  {
    key: '5',
    asylumOffice: 'AyS',
    citizenship: 'h',
    raceOrEthnicity: 'latino',
    caseOutcome: 'pending',
    completion: 's',
    currentDate: 'f',
  },
  {
    key: '6',
    asylumOffice: 'AyS',
    citizenship: 'h',
    raceOrEthnicity: 'latino',
    caseOutcome: 'pending',
    completion: 's',
    currentDate: 'f',
  },
  {
    key: '7',
    asylumOffice: 'AyS',
    citizenship: 'h',
    raceOrEthnicity: 'latino',
    caseOutcome: 'pending',
    completion: 's',
    currentDate: 'f',
  },
  {
    key: '8',
    asylumOffice: 'AyS',
    citizenship: 'h',
    raceOrEthnicity: 'latino',
    caseOutcome: 'pending',
    completion: 's',
    currentDate: 'f',
  },
  {
    key: '9',
    asylumOffice: 'AyS',
    citizenship: 'h',
    raceOrEthnicity: 'latino',
    caseOutcome: 'pending',
    completion: 's',
    currentDate: 'f',
  },
  {
    key: '10',
    asylumOffice: 'AyS',
    citizenship: 'h',
    raceOrEthnicity: 'latino',
    caseOutcome: 'pending',
    completion: 's',
    currentDate: 'f',
  },
  {
    key: '11',
    asylumOffice: 'AyS',
    citizenship: 'h',
    raceOrEthnicity: 'latino',
    caseOutcome: 'pending',
    completion: 's',
    currentDate: 'f',
  },
];

//data will come in as props and not be hard coded
function RenderTablePage(props) {
  return (
    <div>
      <Table
        bordered={true}
        //columns is how many columns we will have
        columns={columns}
        //datasource is where we get the data from
        dataSource={data}
        //pageSize=number controls number of items per page, default is 10
        //position controls location of pagination, default is
        pagination={{
          //pageSize:11,
          position: ['bottomCenter'],
        }}
        title={() => 'Tabular View'}
      />
      ;
    </div>
  );
}
export default RenderTablePage;

//onChange function can be used in Table component to filter data
