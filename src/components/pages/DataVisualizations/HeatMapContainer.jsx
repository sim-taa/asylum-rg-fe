import React, { useState } from 'react';
import WorldHeatMap from './HeatMaps/WorldHeatMap';
import { regions } from '../../../data/filterConstants';
import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;
//Auto-generate a response object to simulate API functionality

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
  const [yearSelection, setYearSelection] = useState('all');

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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Select
          style={{
            textAlign: 'center',
            width: '15em',
            marginTop: '15vh',
          }}
          placeholder="Filter By Office Region"
          defaultValue={'all'}
          onChange={value => setYearSelection(value)}
        >
          <Option value={'all'}>Display Year: All</Option>
          <Option value={2018}>Display Year: 2018</Option>
          <Option value={2019}>Display Year: 2019</Option>
          <Option value={2020}>Display Year: 2020</Option>
          <Option value={2021}>Display Year: 2021</Option>
        </Select>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <WorldHeatMap
          yearSelection={yearSelection}
          reducerForm={reduceTotals}
          apiData={apiData}
          title={
            yearSelection === 'all'
              ? 'Total Asylum Petitions 2018-2021'
              : `Asylum Petitions In ${yearSelection}`
          }
        />
        <WorldHeatMap
          yearSelection={yearSelection}
          reducerForm={reduceGrantRate}
          apiData={apiData}
          title={
            yearSelection === 'all'
              ? 'Total Asylum Grant Rate % 2018-2021'
              : `Asylum Grant Rate % For ${yearSelection}`
          }
        />
      </div>
    </div>
  );
};

export default HeatMapContainer;
