// took the time to populate this Menu component from antd
// because we're already waiting on some merges to go through,
// I chose not to create yet another 'temporary container' to test/render
// used codepen instead as an ad-hoc alternative

import { Menu } from 'antd';
import React from 'react';
import items from './items';

const NavBar = () => {
  const onClick = e => {};
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 'auto',
        height: '100%',
        color: '#3E2B2F',
      }}
      defaultSelectedKeys={['ab1']}
      defaultOpenKeys={['ab']}
      mode="inline"
      items={items}
    />
  );
};
export default NavBar;
