import React from 'react';
import WorldHeatMap from './HeatMaps/WorldHeatMap';
import { connect } from 'react-redux';
import { setHeatMapYear } from '../../../state/actionCreators';
import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;

const mapStateToProps = state => ({
  heatMapYear: state.vizReducer.heatMapYear,
  heatMapData: state.vizReducer.heatMapData,
});

const HeatMapContainer = ({ heatMapYear, heatMapData, setHeatMapYear }) => {
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'rgb(247,228,202)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Select
          style={{
            textAlign: 'center',
            width: '15em',
            marginTop: '5vh',
          }}
          placeholder="Filter By Office Region"
          defaultValue={'all'}
          onChange={value => setHeatMapYear(value)}
        >
          {/* Ultimately, as the data shape is better known, these should be dynamically created */}
          <Option value={'all'}>Display Year: All</Option>
          <Option value={2021}>Display Year: 2021</Option>
          <Option value={2020}>Display Year: 2020</Option>
          <Option value={2019}>Display Year: 2019</Option>
          <Option value={2018}>Display Year: 2018</Option>
        </Select>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#f7e4ca',
        }}
      >
        <WorldHeatMap
          yearSelection={heatMapYear}
          reducerForm={reduceTotals}
          apiData={heatMapData}
          title={
            heatMapYear === 'all'
              ? 'Total Asylum Petitions 2018-2021'
              : `Asylum Petitions In ${heatMapYear}`
          }
        />
        <WorldHeatMap
          yearSelection={heatMapYear}
          reducerForm={reduceGrantRate}
          apiData={heatMapData}
          title={
            heatMapYear === 'all'
              ? 'Total Asylum Grant Rate % 2018-2021'
              : `Asylum Grant Rate % For ${heatMapYear}`
          }
        />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, { setHeatMapYear })(HeatMapContainer);
