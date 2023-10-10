import 'antd/dist/reset.css';
import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { ThemeContext } from './area/theme';
import { router } from './routes';
import { Theme } from './constants/theme';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === Theme.LIGHT ? antdTheme.defaultAlgorithm : antdTheme.darkAlgorithm
      }}
    >
      <RouterProvider router={router} />;
    </ConfigProvider>
  );
};

export default App;
