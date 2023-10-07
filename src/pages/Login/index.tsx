import React from 'react';
import { Space, Typography } from 'antd';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import type { LoginData, FormValues } from '../../area/login/types';
import { LocalStorageKeys } from '../../constants/localStorage';
import { Routes } from '../../constants/routes';
import { LoginForm } from '../../area/login/components/Form';
import { LOGIN_USER } from '../../area/login/queries';

import styles from './styles.module.scss';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const [login, { loading, error }] = useMutation<LoginData, FormValues>(LOGIN_USER, {
    onCompleted({ login }) {
      if (login) {
        localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, login.token);
        navigate(Routes.DASHBOARD);
      }
    }
  });

  return (
    <Space direction="vertical" align="center" className={styles.wrapper}>
      <LoginForm login={login} loading={loading} />
      {error && <Typography.Text type="danger">{error.message}</Typography.Text>}
    </Space>
  );
};
