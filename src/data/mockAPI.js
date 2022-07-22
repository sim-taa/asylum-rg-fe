import { generateData } from './data';

const parseQueryString = query => {
  const filters = {};
  const parameters = query.slice(1).split('&');
  parameters.forEach(
    parameter =>
      (filters[parameter.slice(0, parameter.indexOf('='))] = parameter.slice(
        parameter.indexOf('=') + 1
      ))
  );
  console.log(filters);
  if (filters.asylumOffice)
    filters.asylumOffice = filters.asylumOffice.split(',');
  if (filters.citizenship) filters.citizenship = filters.citizenship.split('0');

  return filters;
};

const filterData = (data, filters) => {
  if (filters.asylumOffice)
    data = data.filter(record => {
      return filters.asylumOffice.includes(record.asylumOffice);
    });
  if (filters.citizenship) {
    console.log(filters.citizenship);
    data = data.filter(record => {
      console.log(record);
      return filters.citizenship.includes(record.citizenship);
    });
  }
  return data;
};

const generateMockFilteredData = (queryString, caseCount = 10000) => {
  const generatedData = generateData(caseCount);
  const filter = parseQueryString(queryString);
  const filteredData = filterData(generatedData, filter);
  return filteredData;
};

export { generateMockFilteredData };
