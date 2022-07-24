import React, { useState } from 'react';
import WorldHeatMap from './HeatMaps/WorldHeatMap';
import { regions } from '../../../data/filterConstants';
import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;
//Auto-generates a simulated API data response object
//This schema is tentative and will need to be adjusted
//as the backend resource and DTO schema develop

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

const HeatMapContainer = props => {
  //If these components get approved, state should be moved to the Redux store
  const [yearSelection, setYearSelection] = useState('all');

  //These reducer functions are passed to the component and used to process
  //incoming API data into case data arrays. Defining these functions outside
  //of the individual heatmap components allows for reusability
  const reduceTotals = region =>
    region.reduce(
      (current, next) => current + next.grant + next.deny + next.dismiss,
      0
    );
  const reduceGrantRate = region => {
    let grant = 0,
      deny = 0;
    region.forEach(year => {
      grant += year.grant;
      deny += year.deny;
    });
    return Math.floor((100 * grant) / (grant + deny));
  };

  return (
    <div style={{ display: 'flex' }}>
      <WorldHeatMap
        yearSelection={yearSelection}
        reducerForm={reduceTotals}
        apiData={apiData}
        title={'Total Asylum Petitions'}
      />
      <WorldHeatMap
        yearSelection={yearSelection}
        reducerForm={reduceGrantRate}
        apiData={apiData}
        title={'Petition Grant Rate %'}
      />
    </div>
  );
};

export default HeatMapContainer;
