import { FC, useMemo, memo } from 'react';
import { Space, Typography } from 'antd';
import type { Chart, Statistic } from '../../types';

import styles from './styles.module.scss';

interface SelectedSectionInfoProps {
  data: Record<Statistic, number>;
  active: string | null;
  total: number;
  title: Chart;
}

// eslint-disable-next-line react/display-name
export const SelectedSectionInfo: FC<SelectedSectionInfoProps> = memo(
  ({ data, active, total, title }) => {
    const value = useMemo(() => {
      if (!active || active === 'total') return total;
      return data[active as Statistic];
    }, [active]);

    return (
      <Space direction="vertical" className={styles.selectedSectionInfo}>
        <Typography.Title level={3} className={styles.title}>
          {title}
        </Typography.Title>
        <Typography.Title level={4}>{value}</Typography.Title>
      </Space>
    );
  }
);
