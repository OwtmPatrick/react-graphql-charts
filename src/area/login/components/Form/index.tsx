import { FC } from 'react';
import { Button, Form, Input } from 'antd';
import type { FormValues } from '../../types';
import { ValidationErrors } from '../../../../constants/validationErrors';

import styles from './styles.module.scss';

interface LoginFormProps {
  login: (options: { variables: FormValues }) => void;
  loading?: boolean;
}

export const LoginForm: FC<LoginFormProps> = ({ login, loading }) => {
  const onFinish = (values: FormValues) => {
    login({ variables: values });
  };

  return (
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
  );
};
