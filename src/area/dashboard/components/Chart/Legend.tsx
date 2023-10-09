import { FC, Dispatch, SetStateAction, memo } from 'react';
import { Typography } from 'antd';
import cn from 'classnames';
import { ChartSection } from '../../types';

import styles from './styles.module.scss';

interface LegendProps {
  data: ChartSection[];
  active: string | null;
  setActive: Dispatch<SetStateAction<string | null>>;
  total: number;
}

// eslint-disable-next-line react/display-name
export const Legend: FC<LegendProps> = memo(({ data, active, setActive, total }) => (
  <ul className={styles.legend}>
    <li
      className={cn(styles.legendItem, { active: active === 'total' })}
      onMouseEnter={() => setActive('total')}
      onMouseLeave={() => setActive(null)}
    >
      <Typography.Text>total</Typography.Text>
      <Typography.Text>{total}</Typography.Text>
    </li>
    {data.map(({ name }) => {
      const item = data.find((item) => item.name === name);

      return (
        <li
          key={name}
          className={cn(styles.legendItem, { active: active === name })}
          onMouseEnter={() => setActive(name)}
          onMouseLeave={() => setActive(null)}
        >
          <Typography.Text>{name}</Typography.Text>
          <Typography.Text>{item?.value}</Typography.Text>
        </li>
      );
    })}
  </ul>
));
