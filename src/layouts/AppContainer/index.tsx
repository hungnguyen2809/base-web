import Loading from 'components/Loading';
import { AppRouteType, delayLazyLoad } from 'layouts/helper';
import PrivateLayout from 'layouts/PrivateLayout';
import getRoutePrivate from 'layouts/PrivateLayout/getRoutePrivate';
import PublicLayout from 'layouts/PublicLayout';
import getRoutePublic from 'layouts/PublicLayout/getRoutePublic';
import React, { lazy, useMemo } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

const Page404 = lazy(() => delayLazyLoad(import('components/Page404')));

const makeRoutes = (routes: AppRouteType[]): JSX.Element[] => {
  return routes.map((route, idx) => {
    const { component: PageComponent } = route;
    return <Route key={idx} path={route.path} element={<PageComponent />} />;
  });
};

const AppContainer: React.FC = () => {
  const routePrivate = useMemo(() => {
    return getRoutePrivate();
  }, []);

  const routePublic = useMemo(() => {
    return getRoutePublic();
  }, []);

  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          {/* Public routes */}
          <Route element={<PublicLayout />}>{makeRoutes(routePublic)}</Route>

          {/* Private route */}
          <Route element={<PrivateLayout />}>{makeRoutes(routePrivate)}</Route>

          {/* Catch all */}
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default AppContainer;
