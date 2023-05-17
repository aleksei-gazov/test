import {AppDispatch, RootState} from 'app/store';
import {BaseThunkAPI} from '@reduxjs/toolkit/dist/createAsyncThunk';
import {AxiosError, isAxiosError} from 'axios';
import {chatListSliceActions} from 'features/chatList/chatListSlice';

export const thunkTryCatch = async (thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, unknown>, logic: Function) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
        return await logic();
    } catch (e) {
        const err = e as Error | AxiosError<{ error: string }>;
        if (isAxiosError(err)) {

            const error = err.response ? err.response.data.error : err.message;
             dispatch(chatListSliceActions.setError({ error }));
        }
        return rejectWithValue(null);
    }
};