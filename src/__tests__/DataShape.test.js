import { data } from '../data/data';

describe('Asylum Office is a string', () => {
  test('[1] asylumOffice is a string', () => {
    const Testdata = data;
    expect(typeof Testdata.asylumOffice).toBe('string');
  });
});

describe('Citizenship data is a string', () => {
  test('[2] citizenship is a string', () => {
    const Testdata = data;
    expect(typeof Testdata.citizenship).toBe('string');
  });
});

describe('Race or Ethnicity data is a string', () => {
  test('[3] raceOrEthnicity is a string', () => {
    const Testdata = data;
    expect(typeof Testdata.raceOrEthnicity).toBe('string');
  });
});
