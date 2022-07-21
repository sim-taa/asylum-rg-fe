import { generateData } from './data';

const generatedData = generateData(10000);

const parseQueryString = query => {
  const filters = {};
  const parameters = query.slice(1).split('&');
  parameters.forEach(
    parameter =>
      (filters[parameter.slice(0, parameter.indexOf('='))] = parameter.slice(
        parameter.indexOf('=') + 1
      ))
  );

  if (filters.asylumOffice)
    filters.asylumOffice = filters.asylumOffice.split(',');
  if (filters.region) filters.region = filters.region.split(',');

  return filters;
};

const filter = (data, filters) => {
  if (filters.asylumOffice)
    data = data.filter(record => {
      return filters.asylumOffice.includes(record.asylumOffice);
    });
  if (filters.region)
    data = data.filter(record => {
      return filters.region.includes(record.citizenship);
    });
  return data;
};

const testQuery = parseQueryString(
  '?isFiscalYear=true&asylumOffice=zny,zmi&region=AFGHANISTAN,ANGOLA,DENMARK'
);

const filteredData = filter(generatedData, testQuery);

export { filteredData };
