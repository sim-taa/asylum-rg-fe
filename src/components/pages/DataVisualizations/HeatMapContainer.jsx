import React, { useState } from 'react';
import WorldHeatMap from './HeatMaps/WorldHeatMap';
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

const HeatMapContainer = props => {
  const [yearSelection, setYearSelection] = useState(2018);

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
