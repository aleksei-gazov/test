
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
    receiptId: number
    body: {
    typeWebhook: string
        instanceData: {
        idInstance: number
            wid: string
            typeInstance: string
    },
    timestamp: number
        idMessage: string
        senderData: {
        chatId: string
            sender: string
            senderName: string
    },
    messageData:{
        typeMessage: string
            textMessageData:{
            textMessage: string
        }    }
}}

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
Перевести время через new Data
//LOGIN
export const getMeTC = createAppAsyncThunk<UserType, loginType>(
    'chatListSlice/getMeTC ',
    async (arg, thunkAPI) => {
        const {dispatch} = thunkAPI      
  return thunkTryCatch(thunkAPI, async () => {
            let res = await authAPI.getMe (arg);
            return {meUser: res?????? }
        })
    }
);
export type loginType = {
idInstance: string
apiTokenInstance: string
chatId: string
}

export type UserType = {
    avatar: string
    name: string
    email: string
    category: string
    description: string
    products: ProductType[]
    chatId: string
    lastSeen: null | string,
    isArchive:boolean,
    isDisappearing: boolean
    isMute: boolean
    messageExpiration: number
    muteExpiration: null | string 
}


export type ProductType = {
id: string
imageUrls: ImageUrlsType
reviewStatus: { whatsapp: string }
availability: string
name: string
price: null | string
isHidden: boolean
}
export type ImageUrlsType = {
requested: string
original: string
}




//getUser
export const getUserTC = createAppAsyncThunk<UserType, GetUserType>(
    'chatListSlice/getUserTC ',
    async (arg, thunkAPI) => {
const {dispatch, getState} = thunkAPI
        const user = getState().meUser.user????
  return thunkTryCatch(thunkAPI, async () => {
            let res = await authAPI.getUser (arg, user);
            return {user: res?????? }
        })
    }
);
//сделать через омит
export type GetUserType = {
chatId: string
}

//GetMessage

export const getMessageTC = createAppAsyncThunk<MessagesArrayType, GetUserType>(
    'chatListSlice/getMessageTC',
    async (arg, thunkAPI) => {
        const {dispatch, getState} = thunkAPI
                const meUser = getState().login.loginData???? //данные для оправки запроса idInstance //и apiTokenInstance
const chats = getState().chats????
        return thunkTryCatch(thunkAPI, async () => {
if(meUser)  let res = await messagesAPI.getMessage(meUser, arg);
chats.forEach(i=> {
if(i.chatId === res.data.body.senderData.chatId) {
let chatIdMessage = chats.find(i=> i.chatId === res.data.body.senderData.chatId)
            return { chatId: chatIdMessage , message: res.data.body.messageData.textMessageData.textMessage}?????????????
}) else {
dispatch(chatListThunks.deleteNotificationTC(res.data.receiptId))
}
            dispatch(chatActios.createChat(chatId: res.data.body.senderData.chatId, message: res.data.body.messageData.textMessageData.textMessage))
        })
    }
);

//chat
const initialState: InitialStateType = {
    chats: null | ChatsType,
    error:  null,
}
         .addCase(getMessageTC.fulfilled, (state, action) => {
                state. [action.payload!.chatId].pusch(action.payload!.message)
            })


//login
const initialState: InitialStateType = {
    userMe: null | UserType,
idInstance: null
apiTokenInstance: null
}
            .addCase(getMeTC.fulfilled, (state, action) => {
                state.userMe =  action.payload.userMe
                state.idInstance = action.payload.idInstance  
              state.apiTokenInstance = action.payload.apiTokenInstance
            })


//chatList
const initialState: InitialStateType = {
 user: null | UserType,
}         
   .addCase(getUserTC.fulfilled, (state, action) => {
                state.user =  action.payload.user
            })



