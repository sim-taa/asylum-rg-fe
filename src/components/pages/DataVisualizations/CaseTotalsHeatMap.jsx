import React from 'react';
import Plot from 'react-plotly.js';

const CaseTotalsHeatMap = props => {
  return (
    <Plot
      data={[
        {
          type: 'choropleth',
          locationmode: 'country names',
          locations: ['Canada', 'PORTUGAL'],
          z: [10, 15],
          text: ['CANADA', 'PORTUGAL'],
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
