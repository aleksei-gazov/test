import React from 'react';
import {InputField} from 'common/components/inputField/InputField';
import {useActions} from 'common/hook/useActions';
import s from 'features/chatList/viewChat/messageInputPanel/MessagelnputPanel.module.scss'
import {chatListThunks} from 'features/chatList/chatListSlice';

export const MessageInputPanel = () => {

    const textLable = 'Введите сообщение'
    const {sendMessageTC} = useActions({...chatListThunks})

    const sendMessageHandler = (value: string) => {
        sendMessageTC({value})
    }
    return (
        <div className={s.container}>

            <InputField onEnter={sendMessageHandler} labelMessage={textLable} widthInput={'900px'}/>

        </div>
    );
};

