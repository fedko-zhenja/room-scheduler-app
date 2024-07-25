import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Schedule',
    key: 'schedule',
  },
  {
    label: 'Login',
    key: 'login',
  },
  {
    label: 'Registration',
    key: 'registration',
  },
  {
    label: 'Logout',
    key: 'logout',
  },
];

export const AuthControls: React.FC = () => {
  const [current, setCurrent] = useState('login');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{justifyContent: "end"}}/>;
};