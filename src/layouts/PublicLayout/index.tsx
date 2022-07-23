import Loading from 'components/Loading';
import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout: React.FC = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Outlet />
    </React.Suspense>
  );
};

export default PublicLayout;
