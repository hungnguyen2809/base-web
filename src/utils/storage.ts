/* eslint-disable @typescript-eslint/no-explicit-any */

import store, { StoreBase } from 'store2';

const _prefix = 'APP_';

export enum STORAGE_KEY {
  ACCESS_TOKEN = 'AccessToken',
}

const getRealKey = (key: string, noPrefix = false): string => {
  if (noPrefix) return key;
  return _prefix + key;
};

export const setStorageData = <T = any>(key: string, data: any, noPrefix?: boolean): T => {
  const realKey = getRealKey(key, noPrefix);
  return store.set(realKey, data);
};

export const getStorageData = <T = any>(key: string, noPrefix?: boolean): T => {
  const realKey = getRealKey(key, noPrefix);
  return store.get(realKey);
};

export const removeStorageData = <T = any>(key: string, noPrefix?: boolean): T => {
  const realKey = getRealKey(key, noPrefix);
  return store.remove(realKey);
};

export const removeAllStorageData = (): StoreBase => {
  return store.clearAll();
};
