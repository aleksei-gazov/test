import React from 'react';
import {ChatList} from 'features/chatList/ChatList';
import s from 'app/App.module.scss'
import {ErrorSnackbar} from 'common/components/errorSnackbar/ErrorSnackbar';
import {Login} from 'features/login/Login';
import {useAppSelector} from 'common/hook/hooks';
import {selectIsLoggedIn} from 'features/login/loginSelectors';
import {Route, Routes} from 'react-router-dom';

const App = () => {
    const  isLoggedIn = useAppSelector(selectIsLoggedIn)

    return (
        <div className={s.container}>
            <ErrorSnackbar/>
            {isLoggedIn ?
                <ChatList/>
                :
                <Login/>
            }
            <Routes>
                <Route path="/chatList" element={<ChatList/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
