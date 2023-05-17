import React from 'react';
import s from './Avatar.module.scss'
import ava from '../../../assets/image/ava.png'


export const Avatar = () => {
    return (
        <div className={s.avatar}>
            <img className={s.avaImg} src={ava} alt="ava"/>
        </div>
    );
};

