import React, { useState, useContext, useEffect } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Context } from '../../index';
import { useLocation, useNavigate } from 'react-router-dom';
import { publicItems, protectedItems } from './menuItems';
import { Paths } from '../../types/type';

export const AuthControls: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {store} = useContext(Context);
  const [current, setCurrent] = useState(location.pathname);

  const [items, setItems] = useState(store.isAuth ? protectedItems : publicItems);

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    setItems(store.isAuth ? protectedItems : publicItems);
  }, [store.isAuth]);

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    navigate(e.key);

    if (e.key === 'logout') {
      store.logout();
      
      navigate(Paths.HomePage);
    }
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{justifyContent: "end"}}/>;
};