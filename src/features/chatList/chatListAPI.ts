import {instanceRec} from 'common/api/commanApi';
import {MessageType} from 'features/chatList/viewChat/messageInputPanel/messageType';
import {UserType} from 'features/login/loginType';

export const messagesAPI = {
    sendMessage: (arg: MessageType, user: UserType) => {
        return instanceRec.post<any>(`waInstance${user.idInstance}/SendMessage/${user.apiTokenInstanc}`,
            arg)
    },
    getMessage: (user: UserType) => {
        return instanceRec.get<any>(`waInstance${user.idInstance}/ReceiveNotification/${user.apiTokenInstanc}`)
    },
    deleteNotification: (receiptId: string, user: UserType) => {
        return instanceRec.delete<any>(`waInstance${user.idInstance}/DeleteNotification/${user.apiTokenInstanc}/${receiptId}`)
    },
}





