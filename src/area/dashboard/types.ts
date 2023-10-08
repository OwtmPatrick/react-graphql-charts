type Statistic = 'active' | 'completed' | 'inacvtive';
type Chart = 'scenarios' | 'lists' | 'dialogs';

export type DashboardData = {
  dashboard: Record<Chart, Record<Statistic, number>>;
};
