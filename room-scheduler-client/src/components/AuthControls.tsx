// import React, { useState, useContext } from 'react';
// import type { MenuProps } from 'antd';
// import { Menu } from 'antd';
// import { Context } from '../index';

// type MenuItem = Required<MenuProps>['items'][number];

// const items: MenuItem[] = [
//   {
//     label: 'Schedule',
//     key: 'schedule',
//   },
//   {
//     label: 'Login',
//     key: 'login',
//   },
//   {
//     label: 'Registration',
//     key: 'registration',
//   },
//   {
//     label: 'Logout',
//     key: 'logout',
//   },

//   {
//     key: 'alipay',
//     label: (
//       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//         Navigation Four - Link
//       </a>
//     ),
//   },
// ];

// export const AuthControls: React.FC = () => {
//   const [current, setCurrent] = useState('login');
//   const {store} = useContext(Context);

//   const onClick: MenuProps['onClick'] = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);

//     if (e.key === 'logout') {
//       store.logout();
//     }
//   };

//   return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{justifyContent: "end"}}/>;
// };

import React, { useState, useContext } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Context } from '../index';
import { Link } from 'react-router-dom';
import { Paths } from '../types/type';
import { useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: Paths.HomePage,
    label: (
      <Link to={Paths.HomePage}>
        Home
      </Link>
    ),
  },
  {
    key: Paths.SchedulePage,
    label: (
      <Link to={Paths.SchedulePage}>
        Schedule
      </Link>
    ),
  },
  {
    key: Paths.LoginPage,
    label: (
      <Link to={Paths.LoginPage}>
        Login
      </Link>
    ),
  },
  {
    key: Paths.RegistrationPage,
    label: (
      <Link to={Paths.RegistrationPage}>
        Registration
      </Link>
    ),
  },
  {
    label: 'Logout',
    key: 'logout',
  },
];

export const AuthControls: React.FC = () => {
  const location = useLocation();
  
  const [current, setCurrent] = useState(location.pathname);
  const {store} = useContext(Context);

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);

    if (e.key === 'logout') {
      store.logout();
    }
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{justifyContent: "end"}}/>;
};