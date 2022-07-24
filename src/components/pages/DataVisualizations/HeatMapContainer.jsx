import React, { useState } from 'react';
import WorldHeatMap from './HeatMaps/WorldHeatMap';
import { regions } from '../../../data/filterConstants';
import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;
<<<<<<< HEAD
//Auto-generates a simulated API data response object
//This schema is tentative and will need to be adjusted
//as the backend resource and DTO schema develop
=======
//Auto-generate a response object to simulate API functionality
>>>>>>> 8d9fe49 (BL-TBD Changed year selector option content to be more communicative, formatted the HeatMapContainer page slightly for demonstration during standup)

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
<<<<<<< HEAD
  //If these components get approved, state should be moved to the Redux store
=======
>>>>>>> 8d9fe49 (BL-TBD Changed year selector option content to be more communicative, formatted the HeatMapContainer page slightly for demonstration during standup)
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
    <div style={{ display: 'flex', backgroundColor: '#f7e4ca' }}>
      <div style={{ width: '20vw', backgroundColor: '#fd8960' }}></div>
      <div
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <div
          style={{
            height: '20vh',
            fontWeight: '900',
            fontSize: '4em',
            color: '#ffffff',
            backgroundColor: '#3e2b2f',
            textAlign: 'center',
          }}
        >
          Can You Feel The Heat?
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'center', width: '80vw' }}
        >
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#f7e4ca',
          }}
        >
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
    </div>
  );
};

export default HeatMapContainer;
