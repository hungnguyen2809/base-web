import Loading from 'components/Loading';
import Page404 from 'components/Page404';
import { AppRouteType } from 'layouts/helper';
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

const makeRoutes = (routes: AppRouteType[]): JSX.Element[] => {
  return routes.map((route, idx) => {
    const { component: PageComponent } = route;
    return <Route key={idx} path={route.path} element={<PageComponent />} />;
  });
};

const AppContainer: React.FC = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          {/* Public routes */}
          <Route element={<PublicLayout />}>{makeRoutes([])}</Route>

          {/* Private route */}
          <Route element={<PrivateLayout />}>{makeRoutes([])}</Route>

          {/* Catch all */}
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default AppContainer;
