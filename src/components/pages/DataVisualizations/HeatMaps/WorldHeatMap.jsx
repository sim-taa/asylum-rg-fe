import React from 'react';
import Plot from 'react-plotly.js';

const CaseTotalsHeatMap = props => {
  const { yearSelection, reducerForm, apiData, title } = props;

  return (
    <Plot
      data={[
        {
          type: 'choropleth',
          // This can be switched to country codes if that proves more efficient for data transfer
          locationmode: 'country names',
          //Takes an array of each country name, or country code if that becomes the format
          locations: apiData.map(region => region.location),
          //This array takes in the values for each country. The Plot will figure out the heat
          //map color range from the data that's available
          z: apiData.map(region =>
            yearSelection === 'all'
              ? reducerForm(region.caseTotals)
              : reducerForm(
                  region.caseTotals.filter(
                    dataYear => yearSelection === dataYear.year
                  )
                )
          ),
          autocolorscale: true,
        },
      ]}
      layout={{
        title,
        paper_bgcolor: '#f7e4ca',
        hoverlabel: {
          bordercolor: '#f7e4ca',
        },
        geo: {
          scope: 'world',
          projection: {
            type: 'robinson',
          },
        },
      }}
      style={{ width: '44vw', fontWeight: '900' }}
    ></Plot>
  );
};

export default CaseTotalsHeatMap;
