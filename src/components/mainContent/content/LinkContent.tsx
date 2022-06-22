import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './ContainerContent.module.css'

type LinkContentPropsType = {
    content1: string
    content2: string
    content3: string
}

export const LinkContent = ({content1, content2, content3}: LinkContentPropsType) => {
    return (
        <div className={style.container}>
            <NavLink to={content3}>
                <span className={style.spanOne}>{content1}</span>
                <span className={style.spanTwo}>{content2}</span>
            </NavLink>
        </div>
    );
};
