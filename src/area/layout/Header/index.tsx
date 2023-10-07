import { useMemo } from 'react';
import { Space, Dropdown, Skeleton } from 'antd';
import type { MenuProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { GET_USER } from '../../user/queries';
import { LocalStorageKeys } from '../../../constants/localStorage';

import styles from './styles.module.scss';

export const Header = () => {
  const { data } = useQuery(GET_USER);
  const navigate = useNavigate();

  const items: MenuProps['items'] = useMemo(
    () => [
      {
        key: 'logout',
        label: 'Logout'
      }
    ],
    []
  );

  const logout: MenuProps['onClick'] = () => {
    localStorage.removeItem(LocalStorageKeys.AUTH_TOKEN);
    navigate('/login');
  };

  const menuProps = {
    items,
    onClick: logout
  };

  return (
    <header className={styles.header}>
      <Dropdown className={styles.menu} menu={menuProps}>
        <Space className={styles.content}>
          {data ? data?.me?.username : <Skeleton.Input className={styles.skeleton} active />}
          <UserOutlined />
        </Space>
      </Dropdown>
    </header>
  );
};
