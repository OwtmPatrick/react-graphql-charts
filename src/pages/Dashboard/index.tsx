import { Header } from '../../area/layout/Header';
import { useQuery } from '@apollo/client';
import { GET_CHARTS } from '../../area/dashboard/queries';
import type { DashboardData } from '../../area/dashboard/types';

export const Dashboard = () => {
  const { data } = useQuery<DashboardData>(GET_CHARTS);

  console.log(data);

  return <Header />;
};
