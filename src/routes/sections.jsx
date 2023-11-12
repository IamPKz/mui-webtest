import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import AuthLayout from 'src/layouts/Auth';
import DashboardLayout from 'src/layouts/dashboard';
import AdminLayout from 'src/layouts/Admin';

export const IndexPage = lazy(() => import('src/pages/app'));
export const LogPage = lazy(() => import('src/pages/parselogs'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const RawLogPage = lazy(() => import('src/pages/rawlogs'));
export const ProfilePage = lazy(() => import('src/pages/profile'));
export const QuizPage = lazy(() => import('src/pages/quiz'));
export const QuizListPage = lazy(() => import('src/pages/quizlist'));
export const BlogContentPage = lazy(() => import('src/pages/blog'));

export const UserPage = lazy(() => import('src/pages/user'));
export const QuizmanagePage = lazy(() => import('src/pages/quizmange'));
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element : <AuthLayout/>,
      children : [
        {path : '/', element : <Navigate to='/login' />},
        {path : 'login' , element: <LoginPage /> },
        
      ]
    },
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: 'rawlogs',element: <RawLogPage /> },
        { path: 'parselog', element: <LogPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'learning', element: <BlogContentPage /> },
        { path: 'profile', element: <ProfilePage /> },
        { path: 'quiz', element: <QuizListPage /> },
        { path: 'quiz/:quizId', element: <QuizPage /> },
      ],
    },
    {
      element: (
        <AdminLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </AdminLayout>  
      ),
      children: [
        { path: 'usermanagement',element: <UserPage />},
        { path: 'quizmanagement',element: <QuizmanagePage />},
      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
