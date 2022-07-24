/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export type AppRouteType = {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  title?: string;
};

export type BageItem = {
  color: string;
  text: string;
};

export type NavItem = {
  component: React.ComponentType<any>;
  name: string;
  to?: string;
  icon?: React.ReactNode;
  items?: NavItem[];
  badge?: BageItem;

  [key: string]: any;
};


export const delayLazyLoad = <T extends React.ComponentType<any>>(
  componentLazy: Promise<{ default: T }>,
  time = 200
): Promise<{ default: T }> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(componentLazy), time);
  });
};