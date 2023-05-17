
export type UserArrayType = {
[userId: string] : UserType
}

export type UserType = {
    avatar: string
    name: string
    time: string
    message: string
}

export type ChatsType = {
    [chatId: string] : MessageType[]
}

export type  MessageType = {
    receiptId: 1234567,
    body: {
    typeWebhook: "incomingMessageReceived",
        instanceData: {
        idInstance: 1234,
            wid: "11001234567@c.us",
            typeInstance: "whatsapp"
    },
    timestamp: 1588091580,
        idMessage: "F7AEC1B7086ECDC7E6E45923F5EDB825",
        senderData: {
        chatId: "79001234568@c.us",
            sender: "79001234568@c.us",
            senderName: "Green API"
    },
    messageData:{
        typeMessage:"textMessage",
            textMessageData:{
            textMessage:"I use Green-API to send this message to you!"
        }
    }
}
}

export type MessagesArrayType = {
    id: string
    message: string
}

export type InitialStateType = {
    chats: null | ChatsType
    phoneNumber: string
    inCreateChat: boolean
    messages: null | MessagesArrayType[]
    error:  string | null,
}