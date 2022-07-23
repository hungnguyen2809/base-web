/* eslint-disable @typescript-eslint/no-explicit-any */
export type AppRouteType = {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
};