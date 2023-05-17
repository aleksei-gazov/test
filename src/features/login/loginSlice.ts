import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialsTateUserType, UserType} from 'features/login/loginType';

const  initialState: InitialsTateUserType= {
    user: null,
    isLoggedIn: false,
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setDataUser: (state, action: PayloadAction<UserType>) => {
            state.user = action.payload;

        },
        IsEntrance: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
    },
});

export const userSliceActions = userSlice.actions
export default userSlice.reducer;

