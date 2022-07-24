import React from 'react';
import Plot from 'react-plotly.js';
import { regions } from '../../../data/filterConstants';

const CaseTotalsHeatMap = props => {
  return (
    <Plot
      data={[
        {
          type: 'choropleth',
          locationmode: 'country names',
          locations: regions.map(region => region.territory),
          z: regions.map(region => Math.floor(Math.random() * 200)),
          text: regions.map(region => region.territory),
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
