import { useQuery } from '@apollo/client';
import { Row, Col } from 'antd';
import { GET_CHARTS } from '../../area/dashboard/queries';
import type { DashboardData, Chart as ChartType } from '../../area/dashboard/types';
import { Header } from '../../area/layout/Header';
import { Container as Chart } from '../../area/dashboard/components/Chart';
import { ChartSkeleton } from '../../area/dashboard/components/ChartSkeleton';

import styles from './styles.module.scss';

export const charts: ChartType[] = ['scenarios', 'lists', 'dialogs'];

export const Dashboard = () => {
  const { data } = useQuery<DashboardData>(GET_CHARTS);

  return (
    <>
      <Header />

      <main className={styles.main}>
        <div className={styles.content}>
          <Row justify="center" gutter={16} className={styles.chartsContainer}>
            {charts.map((chartName) => (
              <Col key={chartName} sm={12} lg={6} className={styles.col}>
                {data ? (
                  <Chart data={data?.dashboard[chartName]} title={chartName} />
                ) : (
                  <ChartSkeleton />
                )}
              </Col>
            ))}
          </Row>
        </div>
      </main>
    </>
  );
};
