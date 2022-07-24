import { CContainer } from '@coreui/react';
import Loading from 'components/Loading';
import { trim } from 'lodash';
import React, { useMemo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getStorageData, STORAGE_KEY } from 'utils/storage';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';

const PrivateLayout: React.FC = () => {
  const isLogged = useMemo(() => {
    return true;
    return Boolean(trim(getStorageData(STORAGE_KEY.ACCESS_TOKEN)));
  }, []);

  return isLogged ? (
    <main>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <React.Suspense fallback={<Loading />}>
            <CContainer fluid>
              <Outlet />
            </CContainer>
          </React.Suspense>
        </div>
      </div>
    </main>
  ) : (
    <Navigate to={'/'} replace />
  );
};

export default PrivateLayout;
