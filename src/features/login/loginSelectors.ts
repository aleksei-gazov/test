import {RootState} from 'app/store';

export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectUser = (state: RootState) => state.user.user;