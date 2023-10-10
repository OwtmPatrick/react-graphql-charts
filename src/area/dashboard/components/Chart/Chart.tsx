import { FC, memo, MouseEvent, useContext, useMemo } from 'react';
import cn from 'classnames';
import type { Chart as ChartTitle, Statistic, ChartSection } from '../../types';
import { SelectedSectionInfo } from './SelectedSectionInfo';
import { chartColors, activeSectionColor } from '../../../../constants/colors';
import { ThemeContext } from '../../../theme';
import { Theme } from '../../../../constants/theme';
import { BG_COLOR_DARK, BG_COLOR_LIGHT } from '../../../theme/constants/colors';

import styles from './styles.module.scss';

interface ChartProps {
  sourceData: Record<Statistic, number>;
  data: ChartSection[];
  title: ChartTitle;
  active: string | null;
  setActive: (value: string | null) => void;
  total: number;
}

// eslint-disable-next-line react/display-name
export const Chart: FC<ChartProps> = memo(
  ({ sourceData, data, title, active, setActive, total }) => {
    const { theme } = useContext(ThemeContext);
    const bgColor = useMemo(
      () => (theme === Theme.LIGHT ? BG_COLOR_LIGHT : BG_COLOR_DARK),
      [theme]
    );

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
          className={cn(styles.svg, { active: active === 'total', dark: theme === Theme.DARK })}
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
                fill={bgColor}
                stroke={active && active === name ? activeSectionColor : chartColors[index]}
                data-key={name}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={styles.circle}
              />
            );
          })}
          <circle cx="20" cy="20" r="16" stroke={bgColor} fill={bgColor} />
        </svg>
        <SelectedSectionInfo data={sourceData} active={active} total={total} title={title} />
      </div>
    );
  }
);
