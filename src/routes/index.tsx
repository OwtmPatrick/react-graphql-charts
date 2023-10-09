import { createBrowserRouter } from 'react-router-dom';
import { Routes } from '../constants/routes';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';

export const router = createBrowserRouter(
  [
    {
      path: Routes.HOME,
      element: <Home />
    },
    {
      path: Routes.LOGIN,
      element: <Login />
    },
    {
      path: Routes.DASHBOARD,
      element: <Dashboard />
    }
  ],
  { basename: '/react-graphql-charts' }
);
