import Loading from 'components/Loading';
import { trim } from 'lodash';
import React, { useMemo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getStorageData, STORAGE_KEY } from 'utils/storage';

const PrivateLayout: React.FC = () => {
  const isLogged = useMemo(() => {
    return Boolean(trim(getStorageData(STORAGE_KEY.ACCESS_TOKEN)));
  }, []);

  return isLogged ? (
    <React.Suspense fallback={<Loading />}>
      <Outlet />
    </React.Suspense>
  ) : (
    <Navigate to={'/'} replace />
  );
};

export default PrivateLayout;
