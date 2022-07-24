import { AppRouteType } from 'layouts/helper';
import routesMap from 'layouts/routesMap';
import { memoize } from 'lodash';
import { lazy } from 'react';

const LoginPage = lazy(() => import('pages/LoginPage'));

const routes: AppRouteType[] = [
  {
    path: routesMap.LOGIN,
    component: LoginPage,
  },
];

const getRoutePublic = memoize(() => {
  return routes;
});

export default getRoutePublic;
