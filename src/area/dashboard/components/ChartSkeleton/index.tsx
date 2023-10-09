import { Skeleton, Space } from 'antd';

import styles from './styles.module.scss';

export const ChartSkeleton = () => (
  <div className={styles.skeleton}>
    <div className={styles.chartContainer}>
      <div className={styles.content}>
        <Skeleton.Node className={styles.chart} active />
      </div>
    </div>

    <Space direction="vertical" className={styles.legend}>
      <Skeleton.Input className={styles.line} size="small" active />
      <Skeleton.Input className={styles.line} size="small" active />
      <Skeleton.Input className={styles.line} size="small" active />
    </Space>
  </div>
);
