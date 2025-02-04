import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useLazyRefreshTokenQuery } from 'store/api/authApi';
import { getCookie } from 'utils/funcs/cookies';
import AppRouter from './components/layout/Router';
import './styles/App.scss';

function App() {
  const [refreshToken, { data, isLoading, isError, error, isSuccess }] = useLazyRefreshTokenQuery();

  React.useEffect(() => {
    const accessToken = getCookie('accessToken');

    if (!accessToken) return;
    refreshToken();
  }, [refreshToken]);

  return (
    <>
      <AppRouter />
      <ToastContainer style={{ marginTop: '5.5rem' }} />
    </>
  );
}

export default App;
