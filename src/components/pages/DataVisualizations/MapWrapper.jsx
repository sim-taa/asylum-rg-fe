import React, { useState, useEffect } from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import CitizenshipMapAll from './HeatMaps/CitizenshipMapAll';
import CitizenshipMapSingleOffice from './HeatMaps/CitizenshipMapSingleOffice';
import TimeSeriesAll from './HeatMaps/TimeSeriesAll';
import OfficeHeatMap from './HeatMaps/OfficeHeatMap';
import TimeSeriesSingleOffice from './HeatMaps/TimeSeriesSingleOffice';
import YearLimitsSelect from './YearLimitsSelect';
import ViewSelect from './ViewSelect';
import axios from 'axios';
import { resetVisualizationQuery } from '../../../state/actionCreators';

function MapWrapper(props) {
  const { set_view, dispatch } = props;
  const { office, view } = useParams();
  let map_to_render;
  if (!office) {
    switch (view) {
      case 'time-series':
        map_to_render = <TimeSeriesAll />;
        break;
      case 'office-heat-map':
        map_to_render = <OfficeHeatMap />;
        break;
      case 'citizenship':
        map_to_render = <CitizenshipMapAll />;
        break;
      default:
        break;
    }
  } else {
    switch (view) {
      case 'time-series':
        map_to_render = <TimeSeriesSingleOffice office={office} />;
        break;
      case 'citizenship':
        map_to_render = <CitizenshipMapSingleOffice office={office} />;
        break;
      default:
        break;
    }
  }
  function updateStateWithNewData(view, office, stateSettingCallback) {
    if (office === 'all' || !office) {
      axios
        .get('http://localhost:3002')
        .then(result => {
          stateSettingCallback(view, office, result.data);
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      axios
        .get('http://localhost:3002')
        .then(result => {
          stateSettingCallback(view, office, result.data);
          console.log(result.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
  const clearQuery = (view, office) =>
    dispatch(resetVisualizationQuery(view, office));
  return (
    <div
      className="map-wrapper-container"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: '50px',
        backgroundColor: 'white',
        border: '1px solid red',
      }}
    >
      {map_to_render}
      <div
        className="user-input-sidebar-container"
        style={{
          position: 'sticky',
          width: '100%',
          top: '40vh',
          right: '5vh',
        }}
      >
        <ViewSelect set_view={set_view} />
        <YearLimitsSelect
          view={view}
          office={office}
          clearQuery={clearQuery}
          updateStateWithNewData={updateStateWithNewData}
        />
      </div>
    </div>
  );
}

export default connect()(MapWrapper);
