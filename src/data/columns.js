/*These are the columns that are imported for the Ant Design Table Component. 
  This array can be expanded as dynamic table construction is implemented.
  If this happens, remember to use Array.filter() to filter out the columns you need inside each Component.
  A suggestion for optimization at that point would be to change this array to an object with the "key" as the hash.*/

export const columns = [
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
