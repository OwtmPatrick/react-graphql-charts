import { useQuery } from '@apollo/client';
import { GET_CHARTS } from '../../area/dashboard/queries';
import type { DashboardData } from '../../area/dashboard/types';
import { Header } from '../../area/layout/Header';
import { Container as Chart } from '../../area/dashboard/components/Chart';

import styles from './styles.module.scss';

export const Dashboard = () => {
  const { data } = useQuery<DashboardData>(GET_CHARTS);

  return (
    <>
      <Header />

      <main className={styles.main}>
        {data ? <Chart data={data?.dashboard.dialogs} title="dialogs" /> : <div>loading..</div>}
      </main>
    </>
  );
};
