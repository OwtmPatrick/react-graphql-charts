import { useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LocalStorageKeys } from '../../constants/localStorage';
import { Routes } from '../../constants/routes';

import styles from './styles.module.scss';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);

    navigate(token ? Routes.DASHBOARD : Routes.LOGIN);
  }, []);

  return (
    <main className={styles.main}>
      <Spin indicator={antIcon} className={styles.spin} />
    </main>
  );
};
