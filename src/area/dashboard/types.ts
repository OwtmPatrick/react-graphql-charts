export type Statistic = 'active' | 'completed' | 'inacvtive';
export type Chart = 'scenarios' | 'lists' | 'dialogs';

export type DashboardData = {
  dashboard: Record<Chart, Record<Statistic, number>>;
};

export type ChartSection = {
  name: Statistic;
  value: number;
  percentage: number;
  remainder: number;
};
