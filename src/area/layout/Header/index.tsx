import { useMemo, useState } from 'react';
import { Space, Dropdown, Skeleton } from 'antd';
import type { MenuProps, ModalProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { GET_USER } from '../../user/queries';
import { LocalStorageKeys } from '../../../constants/localStorage';
import { Routes } from '../../../constants/routes';
import type { UserData } from '../../user/types';
import { LogoutConfirmationModal } from '../../user/components/LogoutConfirmationModal';

import styles from './styles.module.scss';

export const Header = () => {
  const { data } = useQuery<UserData>(GET_USER);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items: MenuProps['items'] = useMemo(
    () => [
      {
        key: 'logout',
        label: 'Logout'
      }
    ],
    []
  );

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const logout: MenuProps['onClick'] = () => {
    localStorage.removeItem(LocalStorageKeys.AUTH_TOKEN);
    navigate(Routes.LOGIN);
  };

  const menuProps = {
    items,
    onClick: toggleModal
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Dropdown className={styles.menu} menu={menuProps}>
          <Space className={styles.dropdownContent}>
            {data ? data?.me?.username : <Skeleton.Input className={styles.skeleton} active />}
            <UserOutlined />
          </Space>
        </Dropdown>

        <LogoutConfirmationModal
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          logout={logout as unknown as ModalProps['onOk']}
        />
      </div>
    </header>
  );
};
