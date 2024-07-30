import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import { Paths } from '../../types/type';

type MenuItem = Required<MenuProps>['items'][number];

  export const publicItems: MenuItem[] = [
    {
      key: Paths.HomePage,
      label: (
        <Link to={Paths.HomePage}>
          Home
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
    }
  ];

  export const protectedItems: MenuItem[] = [
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
      label: 'Logout',
      key: 'logout',
    },
  ];