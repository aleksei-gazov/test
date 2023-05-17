import React, {FC, memo} from 'react';
import {Avatar} from 'common/components/avatar/Avatar';
import s from './ChatPanel.module.scss'
import {useAppSelector} from 'common/hook/hooks';
import { selectUserMessage } from '../chatListSelectors';


type ChatPanelType = {
    name: string
}

export const ChatPanel: FC<ChatPanelType> = memo(({name}) => {
    const userMessage = useAppSelector(selectUserMessage)

    return (
        <div className={s.container}>
            <Avatar/>
            <div className={s.info}>
                <div className={s.nameTime}>
                    <h3 className={s.name}>{name}</h3>
                    <div className={s.time}>time</div>
                </div>
                <div className={s.message}>
                    {userMessage}
                </div>

            </div>
        </div>
    );
});
