import React, {useCallback, useEffect} from 'react';
import {HeadChatList} from 'features/chatList/chatHead/HeadChatList';
import {InputField} from 'common/components/inputField/InputField';
import {useActions} from 'common/hook/useActions';
import {ChatPanel} from 'features/chatList/chatPanel/ChatPanel';
import {chatListSliceActions, chatListThunks} from 'features/chatList/chatListSlice';
import {useAppSelector} from 'common/hook/hooks';
import {selectInCreateChat, selectUserName} from 'features/chatList/chatListSelectors';
import s from './ChatList.module.scss'
import {VievChat} from 'features/chatList/viewChat/VievChat';
import {ChatArea} from 'features/chatList/chatArea/ChatArea';
import {Navigate} from 'react-router-dom';
import {selectIsLoggedIn} from 'features/login/loginSelectors';

export const ChatList = () => {
    const inCreateChat = useAppSelector(selectInCreateChat)
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const userName = useAppSelector<string>(selectUserName)
    const textLable = 'Поиск или новый чат'
    const {
        createChatAC,
        inCreateChatAC,
        getMessageTC,
    } = useActions({...chatListSliceActions, ...chatListThunks})

    const createChatHandler = useCallback((value: string) => {
        createChatAC({value})
        inCreateChatAC({value: true})
    }, [])

    useEffect(() => {
        getMessageTC({})
        setInterval(() => {
            getMessageTC({})
        }, 5000)
    }, [])
    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={s.container}>
            <div className={s.chatFile}>
                <HeadChatList/>
                <InputField onEnter={createChatHandler} labelMessage={textLable} widthInput={'500px'}/>
                {inCreateChat && <ChatPanel name={userName}/>}
            </div>
            <div className={s.chat}>
                {inCreateChat
                    ?
                    <VievChat/>
                    :
                    <ChatArea/>
                }
            </div>
        </div>
    );
};
