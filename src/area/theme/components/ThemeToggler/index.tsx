import { useContext } from 'react';
import { Switch } from 'antd';
import { ThemeContext } from '../..';
import { SunIcon, MoonIcon } from '../Icons';
import { Theme } from '../../../../constants/theme';

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Switch
      checked={theme === Theme.DARK}
      checkedChildren={<SunIcon />}
      unCheckedChildren={<MoonIcon />}
      onChange={toggleTheme}
    />
  );
};
