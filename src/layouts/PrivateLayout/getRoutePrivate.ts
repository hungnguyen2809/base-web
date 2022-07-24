import { AppRouteType } from 'layouts/helper';
import routesMap from 'layouts/routesMap';
import { memoize } from 'lodash';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage'));

const routes: AppRouteType[] = [
  {
    path: routesMap.HOME,
    component: HomePage,
  },
];

const getRoutePrivate = memoize(() => {
  return routes;
});

export default getRoutePrivate;
