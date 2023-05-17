import React, {FC, memo} from 'react';
import s from './Message.module.scss'

type MessageType = {
    message: string
    justifyContentProps: string
}

export const Message: FC<MessageType> = memo(({message, justifyContentProps}) => {

    return (
        <div className={s.message} style={{justifyContent: `${justifyContentProps}`}}>
            {message}
        </div>
    );
});

