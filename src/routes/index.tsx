import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Routes } from '../constants/routes';

import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={Routes.LOGIN} replace />
  },
  {
    path: Routes.LOGIN,
    element: <Login />
  },
  {
    path: Routes.DASHBOARD,
    element: <Dashboard />
  }
]);
