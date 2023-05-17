import {RootState} from 'app/store';

export const selectInCreateChat = (state: RootState) => state.chatList.inCreateChat;
export const selectUserName = (state: RootState) => state.chatList.phoneNumber;
export const selectUserMessage = (state: RootState) => state.chatList.userMessage;
export const selectMessages = (state: RootState) => state.chatList.messages;
export const selectError = (state: RootState) => state.chatList.error;