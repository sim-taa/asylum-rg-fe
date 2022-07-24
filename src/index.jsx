import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  // useHistory,
  Switch,
} from 'react-router-dom';

import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { ExampleListPage } from './components/pages/ExampleList';
import { LandingPage } from './components/pages/Landing';
import { TablePage } from './components/pages/Table';
import { ExampleDataViz } from './components/pages/ExampleDataViz';
<<<<<<< HEAD
import { FooterContent, SiderContent, SubFooter } from './components/Layout';
import { Layout } from 'antd';
import CaseTotalsHeatMap from './components/pages/DataVisualizations/CaseTotalsHeatMap';
import HeatMapContainer from './components/pages/DataVisualizations/HeatMapContainer';
=======
import HeatMapContainer from './components/pages/DataVisualizations/HeatMapContainer';

// currently unused imports/components
/**
 * import { LoadingComponent } from './components/common';
 * import { config } from './utils/oktaConfig';
 * import { HomePage } from './components/pages/Home';
 * import { LoginPage } from './components/pages/Login';
 * import { ProfileListPage } from './components/pages/ProfileList';
 *
 */

>>>>>>> c4164f7 (BL-TBD Created HeatMapContainer, moved data generation and managedment of year selection to that container, and began abstracting the functions used to generate the data arrays for each heatmap into props that can be passed from the parent container through props (thereby creating a reusable heatmap component))
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducers';

const store = configureStore({ reducer: reducer });

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);

function App() {
  const { Content, Footer } = Layout;
  return (
<<<<<<< HEAD
    <Layout>
      <Layout>
        <SiderContent />
        <Content>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/table" component={TablePage} />
            <Route path="/example-list" component={ExampleListPage} />
            <Route path="/datavis" component={ExampleDataViz} />
            <Route path="/heatmap" component={HeatMapContainer} />
            <Route component={NotFoundPage} />
          </Switch>
        </Content>
      </Layout>
      <Footer
        style={{
          backgroundColor: '#473D3D',
          color: '#E2F0F7',
        }}
      >
        <FooterContent />
      </Footer>
      <Footer
        style={{
          backgroundColor: '#403737',
          padding: 0,
        }}
      >
        <SubFooter />
      </Footer>
    </Layout>
=======
    // <Security {...config} onAuthRequired={authHandler}>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/table" component={TablePage} />
      <Route path="/example-list" component={ExampleListPage} />
      <Route path="/datavis" component={ExampleDataViz} />
      <Route path="/heatmap" component={HeatMapContainer} />
      <Route component={NotFoundPage} />
    </Switch>
    // </Security>
>>>>>>> c4164f7 (BL-TBD Created HeatMapContainer, moved data generation and managedment of year selection to that container, and began abstracting the functions used to generate the data arrays for each heatmap into props that can be passed from the parent container through props (thereby creating a reusable heatmap component))
  );
}
