import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import chatListReducer from 'features/chatList/chatListSlice';
import userReducer from 'features/login/loginSlice';

export const store = configureStore({
    reducer: {
        chatList: chatListReducer,
        user: userReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
