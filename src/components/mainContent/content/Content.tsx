import React from 'react';
import style from './ContainerContent.module.css'

type ContentPropsType = {
    content1:string
    content2?:string
    content3?:string
    content4?:string
}

export const Content = ({content1,content2,content3,content4}:ContentPropsType) => {

    return (
        <div className={`${style.container} ${style.noLinkContainer}`}>
            <span className={`${style.spanOne} ${style.textIntro}`}>{content1}</span>
            <span className={style.spanOne}>{content2}</span>
            <span className={style.spanOne}>{content3}</span>
            <span className={`${style.spanTwo} ${style.textIntro}`}>{content4}</span>
        </div>
    );
};


