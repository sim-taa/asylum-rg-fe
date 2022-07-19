import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFilteredData } from '../../../state/actions';

const MountedTest = ({ cases, getFilteredData }) => {
  useEffect(() => {
    getFilteredData('test string');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const caseList = cases.map((entry, index) => {
    return (
      <p key={index}>
        <span>{entry.asylumOffice} </span>
        <span>{entry.citizenship} </span>
        <span>{entry.caseOutcome}</span>
      </p>
    );
  });

  return caseList;
};

const mapStateToProps = state => ({
  cases: state.dataReducer.cases,
});

export default connect(mapStateToProps, { getFilteredData })(MountedTest);
