import { FC, useMemo } from 'react';
import { Button, Modal, Typography } from 'antd';
import type { ModalProps } from 'antd';

interface LogoutConfirmationModalProps {
  isModalOpen: boolean;
  toggleModal: ModalProps['onCancel'];
  logout: ModalProps['onOk'];
}

export const LogoutConfirmationModal: FC<LogoutConfirmationModalProps> = ({
  isModalOpen,
  toggleModal,
  logout
}) => {
  const footer = useMemo(
    () => (
      <>
        <Button type="primary" onClick={logout}>
          Yes
        </Button>
        <Button onClick={toggleModal}>No</Button>
      </>
    ),
    [toggleModal]
  );

  return (
    <Modal title="Logout" open={isModalOpen} onOk={logout} onCancel={toggleModal} footer={footer}>
      <Typography.Title level={3}>Do you really want to leave?</Typography.Title>
    </Modal>
  );
};
