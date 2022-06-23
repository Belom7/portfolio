import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './ContainerContent.module.css'

type LinkContentPropsType = {
    name1: string
    name2: string
    link: string
}

export const LinkContent = ({name1, name2, link}: LinkContentPropsType) => {
    return (
        <div className={style.container}>
            <NavLink to={link}>
                <span className={style.spanOne}>{name1}</span>
                <span className={style.spanTwo}>{name2}</span>
            </NavLink>
        </div>
    );
};
