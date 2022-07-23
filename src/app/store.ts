import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import createRootReducer from './rootReducer';

const rootReducer = createRootReducer();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlware) => {
    return getDefaultMiddlware();
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
