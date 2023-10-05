import React from 'react';
import { Space, Button, Form, Input } from 'antd';
import type { FormValues } from './types';
import { ValidationErrors } from '../../constants/validationErrors';

import styles from './styles.module.scss';

export const Login: React.FC = () => {
  const onFinish = (values: FormValues) => {
    console.log('submit:', values);
  };

  return (
    <Space align="center" className={styles.wrapper}>
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
          <Input />
        </Form.Item>

        <Form.Item<FormValues>
          label="Password"
          name="password"
          rules={[{ required: true, message: ValidationErrors.REQUIRED_FIELD }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
};
