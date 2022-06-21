import React from 'react';
import style from '../common/styles/Container.module.css'

type ContentPropsType = {
    content1:string
    content2?:string
    content3?:string
}

export const Content = ({content1,content2,content3}:ContentPropsType) => {
    return (
        <div className={`${style.container} ${style.noLinkContainer}`}>
            <span className={`${style.spanOne} ${style.textIntro}`}>{content1}</span>
            <span className={style.spanOne}>{content2}</span>
            <span className={style.spanOne}>{content3}</span>
        </div>
    );
};
