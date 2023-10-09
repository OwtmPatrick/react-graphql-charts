import { Statistic, ChartSection } from '../types';

export const omit = <T>(obj: Record<string, T>, property: string): Record<string, T> => {
  return Object.keys(obj)
    .filter((key) => {
      return key !== property;
    })
    .reduce(
      (acc, key) => {
        acc[key] = obj[key];

        return acc;
      },
      {} as Record<string, T>
    );
};

export const prepareData = (data: Record<Statistic, number>): ChartSection[] => {
  const total = Object.keys(data).reduce((acc, name) => acc + data[name as Statistic], 0);

  const res = Object.keys(data).map((name) => {
    const value = data[name as Statistic];
    const percentage = (value / total) * 100;

    return {
      name: name as Statistic,
      value,
      percentage,
      remainder: 100 - percentage
    };
  });

  return res;
};
