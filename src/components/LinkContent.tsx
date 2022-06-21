import React from 'react';
import style from '../common/styles/Container.module.css'

type LinkContentPropsType = {
    content1:string
    content2:string
}

export const LinkContent = ({content1,content2}:LinkContentPropsType) => {
    return (
        <div className={style.container}>
            <span className={style.spanOne}>{content1}</span>
            <span className={style.spanTwo}>{content2}</span>
        </div>
    );
};
