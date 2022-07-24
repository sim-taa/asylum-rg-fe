import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { regions } from '../../../data/filterConstants';

//Auto-generate a data-values object to simulate what the API could return
const apiData = regions.map(region => {
  return {
    location: region.territory,
    caseTotals: [
      {
        year: 2018,
        grant: Math.floor(Math.random() * 100),
        deny: Math.floor(Math.random() * 100),
        dismiss: Math.floor(Math.random() * 100),
      },
      {
        year: 2019,
        grant: Math.floor(Math.random() * 100),
        deny: Math.floor(Math.random() * 100),
        dismiss: Math.floor(Math.random() * 100),
      },
      {
        year: 2020,
        grant: Math.floor(Math.random() * 100),
        deny: Math.floor(Math.random() * 100),
        dismiss: Math.floor(Math.random() * 100),
      },
      {
        year: 2021,
        grant: Math.floor(Math.random() * 100),
        deny: Math.floor(Math.random() * 100),
        dismiss: Math.floor(Math.random() * 100),
      },
    ],
  };
});

const CaseTotalsHeatMap = props => {
  const [yearSelection, setYearSelection] = useState(2018);

  return (
    <Plot
      data={[
        {
          type: 'choropleth',
          locationmode: 'country names',
          locations: apiData.map(region => region.location),
          z: apiData.map(region =>
            yearSelection === 'Total'
              ? region.caseTotals.reduce(
                  (current, next) =>
                    current + next.grant + next.deny + next.dismiss,
                  0
                )
              : region.caseTotals
                  .filter(dataYear => yearSelection === dataYear.year)
                  .reduce(
                    (current, next) =>
                      current + next.grant + next.deny + next.dismiss,
                    0
                  )
          ),
          text: apiData.map(region => region.location),
          autocolorscale: true,
        },
      ]}
      layout={{
        title: 'Asylum Applications',
        geo: {
          scope: 'world',
          projection: {
            type: 'robinson',
          },
        },
      }}
    ></Plot>
  );
};

export default CaseTotalsHeatMap;
