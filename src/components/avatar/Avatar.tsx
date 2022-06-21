import React from 'react';
import style from './Avatar.module.css'

export const Avatar = () => {
    return (
        <div className={style.avatarContainer}>
            <div className={style.ttt}>
                <img src="https://i.pinimg.com/736x/9f/ec/6f/9fec6f487ee2d5bf6495d42182ed0eef.jpg" alt="avatar"/>
            </div>
        </div>
    );
};
