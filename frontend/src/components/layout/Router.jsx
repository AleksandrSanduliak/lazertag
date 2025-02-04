import Login from 'components/pages/Login/Login';
import MainPage from 'components/pages/MainPage';
import NotFound from 'components/pages/NotFound';
import PasswordRecovery from 'components/pages/PasswordRecovery/PasswordRecovery';
import Register from 'components/pages/Register/Register';
import UserCabinet from 'components/pages/UserCabinet/UserCabinet';
import React from 'react';
import { Route, Routes } from 'react-router';
import { navigationData } from 'utils/consts/navigationData';
import Layout from './Layout';
import RequireAuth from './RequireAuth';

const authPages = [
  {
    id: 'login',
    link: '/login',
    element: <Login />,
  },
  {
    id: 'passwordRecovery',
    link: '/passwordRecovery',
    element: <PasswordRecovery />,
  },
  {
    id: 'Register',
    link: '/Register',
    element: <Register />,
  },
  {
    id: 'userCabinet',
    link: '/userCabinet',
    element: (
      <RequireAuth>
        <UserCabinet />
      </RequireAuth>
    ),
  },
];

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        {authPages.map((item) => {
          return <Route key={item.id} path={item.link} element={item.element} />;
        })}
        {navigationData.map((item) => {
          return <Route key={item.id} path={item.link} element={item.element} />;
        })}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
