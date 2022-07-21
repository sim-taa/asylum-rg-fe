import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../../common';
import { Layout } from 'antd';

function RenderLandingPage(props) {
  const { Content, Sider } = Layout;
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          overflow: 'auto',
          height: '100vh',
          // position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <NavBar />
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 100 }}>
            <h1>Welcome to Labs Basic SPA</h1>
            <div>
              <p>
                This is an example of how we'd like for you to approach
                page/routable components
              </p>
              <p>
                <Link to="/example-list">Example List of Items</Link>
              </p>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
export default RenderLandingPage;
