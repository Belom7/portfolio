import React from 'react';
import style from './Avatar.module.css'

export const Avatar = () => {
    return (
        <div className={style.avatarContainer}>
            <div className={style.ttt}>
                <img src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg" alt="avatar"/>
            </div>
        </div>
    );
};
