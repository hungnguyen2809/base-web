import { createReducer } from '@reduxjs/toolkit';
import { actionToggleSidebar } from './actions';

interface AppState {
  showSidebar: boolean;
}

const initState: AppState = {
  showSidebar: true,
};

const appConfigReducer = createReducer(initState, (builder) => {
  builder.addCase(actionToggleSidebar, (state, action) => {
    state.showSidebar = action.payload;
  });
});

export default appConfigReducer;
