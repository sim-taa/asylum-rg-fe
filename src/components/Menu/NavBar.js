// took the time to populate this Menu component from antd
// because we're already waiting on some merges to go through,
// I chose not to create yet another 'temporary container' to test/render
// used codepen instead as an ad-hoc alternative

import { Menu } from 'antd';
import React from 'react';
import items from './items';

const NavBar = () => {
  const onClick = e => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default NavBar;
