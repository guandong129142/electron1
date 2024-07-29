import { Navigate, useRoutes } from 'react-router-dom';
import Layout from '@/layout';
import Login from '@/views/Login';
import Welcome from '@/views/Welcome';
import Dashboard from '@/views/Dashboard';
import UserManager from '@/views/UserManager';
import Error404 from '@/views/404';
import Error403 from '@/views/403';

const router = [
  {
    path: '/',
    element: <Navigate to='/welcome' />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    id: 'layout',
    element: <Layout />,
    children: [
      {
        path: '/welcome',
        element: <Welcome />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/usermanager',
        element: <UserManager />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '/404',
    element: <Error404 />
  },
  {
    path: '/403',
    element: <Error403 />
  }
];

export default function Router() {
  return useRoutes(router);
}