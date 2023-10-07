import React from 'react';
import { Space, Button, Form, Input, Typography } from 'antd';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import type { FormValues } from './types';
import { ValidationErrors } from '../../constants/validationErrors';
import { LocalStorageKeys } from '../../constants/localStorage';
import { Routes } from '../../constants/routes';

import styles from './styles.module.scss';

const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (values: FormValues) => {
    login({ variables: values });
  };

  const [login, { loading, error }] = useMutation<
    { login: { username: string; token: string } },
    { username: string; password: string }
  >(LOGIN_USER, {
    onCompleted({ login }) {
      if (login) {
        localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, login.token);
        navigate(Routes.DASHBOARD);
      }
    }
  });

  return (
    <Space direction="vertical" align="center" className={styles.wrapper}>
      <Form<FormValues>
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        className={styles.form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FormValues>
          label="Username"
          name="username"
          rules={[{ required: true, message: ValidationErrors.REQUIRED_FIELD }]}
        >
          <Input disabled={loading} />
        </Form.Item>

        <Form.Item<FormValues>
          label="Password"
          name="password"
          rules={[{ required: true, message: ValidationErrors.REQUIRED_FIELD }]}
        >
          <Input.Password disabled={loading} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>

      {error && <Typography.Text type="danger">{error.message}</Typography.Text>}
    </Space>
  );
};
