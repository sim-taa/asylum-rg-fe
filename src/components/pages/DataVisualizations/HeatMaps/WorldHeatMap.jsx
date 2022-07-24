import React from 'react';
import Plot from 'react-plotly.js';

//Auto-generate a data-values object to simulate what the API could return

const CaseTotalsHeatMap = props => {
  const { yearSelection, reducerForm, apiData } = props;

  return (
    <Plot
      data={[
        {
          type: 'choropleth',
          locationmode: 'country names',
          locations: apiData.map(region => region.location),
          z: apiData.map(region =>
            yearSelection === 'Total'
              ? reducerForm(region.caseTotals)
              : reducerForm(
                  region.caseTotals.filter(
                    dataYear => yearSelection === dataYear.year
                  )
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
