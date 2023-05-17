import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialStateType, UserArrayType} from 'features/chatList/chatListTypes';
import {createAppAsyncThunk} from 'common/utils/create-app-async-thunk';
import {MessagesArrayType} from 'features/chatList/viewChat/messageInputPanel/messageType';
import {thunkTryCatch} from 'common/utils/thunk-try-catch';
import {messagesAPI} from 'features/chatList/chatListAPI';

export const sendMessageTC = createAppAsyncThunk<MessagesArrayType, {value: string}>(
    'chatListSlice/sendMessageTC',
    async (arg, thunkAPI) => {
        const {getState} = thunkAPI
        return thunkTryCatch(thunkAPI, async () => {
            const chatId = getState().chatList.phoneNumber
            const user = getState().user.user
            const argMessage = {
                'chatId': `${chatId}@c.us`,
                'message': arg.value
            }
            let res = await messagesAPI.sendMessage(argMessage, user);
            return ({id: '1', message: arg.value})
        })
    }
);

export const getMessageTC = createAppAsyncThunk<MessagesArrayType, void>(
    'chatListSlice/getMessageTC',
    async (_, thunkAPI) => {
        const {dispatch, getState} = thunkAPI
        const user = getState().user.user
        return thunkTryCatch(thunkAPI, async () => {
            let res = await messagesAPI.getMessage(user);
            dispatch(chatListThunks.deleteNotificationTC(res.data.receiptId))
            return {id: '2', message: res.data.body.messageData.textMessageData.textMessage}
        })
    }
);
export const deleteNotificationTC = createAppAsyncThunk<string, string>(
    'counter/deleteNotificationTC',
    async (arg, thunkAPI) => {
        const {getState} = thunkAPI
        const user = getState().user.user
        return thunkTryCatch(thunkAPI, async () => {
            let res = await messagesAPI.deleteNotification(arg, user);
        })
    }
);
const initialState: InitialStateType = {
    chats: null,
    phoneNumber: '',
    inCreateChat: false,
    messages: null,
    error:  null,
}

export const chatListSlice = createSlice({
    name: 'chatListSlice',
    initialState,
    reducers: {
        createChatAC: (state, action: PayloadAction<{ value: string }>) => {
            state.phoneNumber = action.payload.value
        },
        inCreateChatAC: (state, action: PayloadAction<{ value: true }>) => {
            state.inCreateChat = action.payload.value
        },
        setError: (state, action: PayloadAction<{ error: string | null }>) => {
            state.error = action.payload.error;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMessageTC.fulfilled, (state, action) => {
                state.messages.push(action.payload)
                state.userMessage = action.payload.message
            })
            .addCase(sendMessageTC.fulfilled, (state, action) => {
                state.messages.push(action.payload)
            })
    },
});

export const chatListThunks = {sendMessageTC, getMessageTC, deleteNotificationTC};
export const chatListSliceActions = chatListSlice.actions
export default chatListSlice.reducer;
