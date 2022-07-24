import React from 'react';
import Plot from 'react-plotly.js';

<<<<<<< HEAD
<<<<<<< HEAD
const CaseTotalsHeatMap = props => {
  const { yearSelection, reducerForm, apiData, title } = props;
=======
//Auto-generate a data-values object to simulate what the API could return

const CaseTotalsHeatMap = props => {
  const { yearSelection, reducerForm, apiData } = props;
>>>>>>> c4164f7 (BL-TBD Created HeatMapContainer, moved data generation and managedment of year selection to that container, and began abstracting the functions used to generate the data arrays for each heatmap into props that can be passed from the parent container through props (thereby creating a reusable heatmap component))
=======
const CaseTotalsHeatMap = props => {
  const { yearSelection, reducerForm, apiData, title } = props;
>>>>>>> 8ccb194 (BL-TBD Finished preliminary abstraction of individualizing heatmap properties -- WorldHeatMap component is now reusable)

  return (
    <Plot
      data={[
        {
          type: 'choropleth',
<<<<<<< HEAD
          // This can be switched to country codes if that proves more efficient for data transfer
          locationmode: 'country names',
          //Takes an array of each country name, or country code if that becomes the format
          locations: apiData.map(region => region.location),
          //This array takes in the values for each country. The Plot will figure out the heat
          //map color range from the data that's available
          z: apiData.map(region =>
            yearSelection === 'all'
=======
          locationmode: 'country names',
          locations: apiData.map(region => region.location),
          z: apiData.map(region =>
            yearSelection === 'Total'
>>>>>>> c4164f7 (BL-TBD Created HeatMapContainer, moved data generation and managedment of year selection to that container, and began abstracting the functions used to generate the data arrays for each heatmap into props that can be passed from the parent container through props (thereby creating a reusable heatmap component))
              ? reducerForm(region.caseTotals)
              : reducerForm(
                  region.caseTotals.filter(
                    dataYear => yearSelection === dataYear.year
                  )
                )
          ),
<<<<<<< HEAD
=======
          text: apiData.map(region => region.location),
>>>>>>> c4164f7 (BL-TBD Created HeatMapContainer, moved data generation and managedment of year selection to that container, and began abstracting the functions used to generate the data arrays for each heatmap into props that can be passed from the parent container through props (thereby creating a reusable heatmap component))
          autocolorscale: true,
        },
      ]}
      layout={{
<<<<<<< HEAD
<<<<<<< HEAD
        title,
        paper_bgcolor: '#f7e4ca',
        hoverlabel: {
          bordercolor: '#f7e4ca',
        },
=======
        title: 'Asylum Applications',
>>>>>>> c4164f7 (BL-TBD Created HeatMapContainer, moved data generation and managedment of year selection to that container, and began abstracting the functions used to generate the data arrays for each heatmap into props that can be passed from the parent container through props (thereby creating a reusable heatmap component))
=======
        title,
>>>>>>> 8ccb194 (BL-TBD Finished preliminary abstraction of individualizing heatmap properties -- WorldHeatMap component is now reusable)
        geo: {
          scope: 'world',
          projection: {
            type: 'robinson',
          },
        },
      }}
<<<<<<< HEAD
      style={{ width: '44vw', fontWeight: '900' }}
=======
>>>>>>> c4164f7 (BL-TBD Created HeatMapContainer, moved data generation and managedment of year selection to that container, and began abstracting the functions used to generate the data arrays for each heatmap into props that can be passed from the parent container through props (thereby creating a reusable heatmap component))
    ></Plot>
  );
};

export default CaseTotalsHeatMap;
