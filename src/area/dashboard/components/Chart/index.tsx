import { FC, useState, useMemo } from 'react';
import type { Chart as ChartTitle, Statistic } from '../../types';
import { omit, prepareData } from '../../utils';
import { Chart } from './Chart';
import { Legend } from './Legend';

interface ChartProps {
  data: Record<Statistic, number>;
  title: ChartTitle;
}

export const Container: FC<ChartProps> = ({ data: sourceData, title }) => {
  const [active, setActive] = useState<string | null>(null);
  const data = useMemo(() => prepareData(omit(sourceData, '__typename')), []);
  const total = useMemo(
    () =>
      Object.keys(omit(sourceData, '__typename')).reduce(
        (acc, name) => acc + sourceData[name as Statistic],
        0
      ),
    []
  );

  return (
    <>
      <Chart
        sourceData={sourceData}
        data={data}
        active={active}
        setActive={setActive}
        title={title}
        total={total}
      />

      <Legend data={data} active={active} setActive={setActive} total={total} />
    </>
  );
};
