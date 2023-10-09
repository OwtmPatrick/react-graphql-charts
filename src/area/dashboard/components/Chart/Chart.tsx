import { FC, memo, MouseEvent } from 'react';
import cn from 'classnames';
import type { Chart as ChartTitle, Statistic, ChartSection } from '../../types';
import { SelectedSectionInfo } from './SelectedSectionInfo';
import { chartColors, activeSectionColor } from '../../../../constants/colors';

import styles from './styles.module.scss';

interface ChartProps {
  sourceData: Record<Statistic, number>;
  data: ChartSection[];
  title: ChartTitle;
  active: string | null;
  setActive: (value: string | null) => void;
  total: number;
}

export const Chart: FC<ChartProps> = memo(
  ({ sourceData, data, title, active, setActive, total }) => {
    const onMouseEnter = (e: MouseEvent) => {
      const key = e.currentTarget.getAttribute('data-key');

      setActive(key);
    };

    const onMouseLeave = () => setActive(null);

    return (
      <div className={styles.chart}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 40 40"
          className={cn(styles.svg, { active: active === 'total' })}
        >
          {data.map((tag, index) => {
            const { name, percentage, remainder } = tag;

            return (
              <circle
                key={name}
                cx="20"
                cy="20"
                r="16"
                strokeDasharray={`${percentage} ${remainder}`}
                strokeDashoffset={
                  100 - data.slice(0, index).reduce((a, b) => a + b.percentage, 0) + 25
                }
                strokeWidth="6"
                fill="#fff"
                stroke={active && active === name ? activeSectionColor : chartColors[index]}
                data-key={name}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={styles.circle}
              />
            );
          })}
          <circle cx="20" cy="20" r="16" stroke="#fff" fill="#fff" />
        </svg>
        <SelectedSectionInfo data={sourceData} active={active} total={total} title={title} />
      </div>
    );
  }
);
