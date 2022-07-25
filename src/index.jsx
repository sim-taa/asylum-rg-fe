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
import { NavBar, FooterContent } from './components/Menu';
import { Layout } from 'antd';
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
  const { Content, Sider, Footer } = Layout;
  return (
    <Layout>
      <Sider
        // I would wait on breakpoints and collapsing options until design documents updated to include mobile
        // breakpoint="lg"
        // collapsedWidth="0"
        style={{
          overflow: 'auto',
          height: '100vh',
          // position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
        width="auto"
      >
        <NavBar />
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/table" component={TablePage} />
            <Route path="/example-list" component={ExampleListPage} />
            <Route path="/datavis" component={ExampleDataViz} />
            <Route component={NotFoundPage} />
          </Switch>
        </Content>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
    </Layout>
  );
}
