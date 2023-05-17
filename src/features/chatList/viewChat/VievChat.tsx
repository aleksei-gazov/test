import React from 'react';
import {useAppSelector} from 'common/hook/hooks';
import s from 'features/chatList/viewChat/VievChat.module.scss'
import {Message} from 'common/components/message/Message';
import {MessageInputPanel} from 'features/chatList/viewChat/messageInputPanel/MessageInputPanel';
import MainHeader from 'features/chatList/viewChat/mainHeader/MainHeader';
import { selectMessages } from '../chatListSelectors';


export const VievChat = () => {
    const messages = useAppSelector(selectMessages)

    return (
        <div className={s.container}>
            <MainHeader/>
            <div className={s.messages}>
                {messages.map((m, i) => {
                    return (
                        m.id === '1' ?
                            <div key={i} className={s.mainMessage}>
                                <Message message={m.message} justifyContentProps={'flex-end'}/>
                            </div>
                            :
                            <div className={s.userMessage}>
                                <Message key={i} message={m.message} justifyContentProps={'flex-start'}/>
                            </div>
                    )
                })}
            </div>
            <MessageInputPanel/>
        </div>
    );
};
