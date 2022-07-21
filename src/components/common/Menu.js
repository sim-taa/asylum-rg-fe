import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    <a href="/about" title="About">
      About
    </a>,
    'ab',
    [
      getItem(
        <a href="/about" title="">
          About Us
        </a>,
        'ab1'
      ),
      getItem(
        <a href="/about/staff" title="">
          Leadership & Staff
        </a>,
        'ab2'
      ),
      getItem(
        <a href="/about/board-of-directors" title="">
          Boards
        </a>,
        'ab3'
      ),
      getItem(
        <a href="/topics/coalitions" title="">
          Coalitions
        </a>,
        'ab4'
      ),
      getItem(
        <a href="/about/annual-reports-financials" title="">
          Annual Reports & Financials
        </a>,
        'ab5'
      ),
      getItem(
        <a href="/about/events" title="">
          Events
        </a>,
        'ab6'
      ),
      getItem(
        <a href="http://www.humanrightsfirst.org/careers" title="">
          Careers
        </a>,
        'ab7'
      ),
      getItem(
        <a href="/about/contact" title="">
          Contact
        </a>,
        'ab8'
      ),
      getItem(
        <a
          href="http://www.humanrightsfirst.org/our-work/refugee-protection/probono-program"
          title=""
        >
          Seeking Asylum?
        </a>,
        'ab9'
      ),
    ]
  ),
  getItem('Campaigns', 'camp'),
  getItem('Topics', 'top'),
  getItem('Resources', 'res'),
  getItem('Media', 'med'),
  getItem('Initiatives', 'init'),
  //   getItem('Navigation One', 'sub1', <MailOutlined />, [
  //     getItem(
  //       'Item 1',
  //       'g1',
  //       null,
  //       [getItem('Option 1', '1'), getItem('Option 2', '2')],
  //       'group'
  //     ),
  //     getItem(
  //       'Item 2',
  //       'g2',
  //       null,
  //       [getItem('Option 3', '3'), getItem('Option 4', '4')],
  //       'group'
  //     ),
  //   ]),
  //   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
  //     getItem('Option 5', '5'),
  //     getItem('Option 6', '6'),
  //     getItem('Submenu', 'sub3', null, [
  //       getItem('Option 7', '7'),
  //       getItem('Option 8', '8'),
  //     ]),
  //   ]),
  //   getItem('Navigation Three', 'sub4', <SettingOutlined />, [
  //     getItem('Option 9', '9'),
  //     getItem('Option 10', '10'),
  //     getItem('Option 11', '11'),
  //     getItem('Option 12', '12'),
  //   ]),
];
const App = () => {
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
export default App;
