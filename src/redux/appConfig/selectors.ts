import { RootState } from 'app/store';

export const selectAppSidebarShow = (state: RootState) => state.appConfig.showSidebar;
