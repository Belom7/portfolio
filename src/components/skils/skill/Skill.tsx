import React from 'react';
import style from './Skill.module.css'

type skillPropsType = {
    title: string
    description:string
}

export const Skill = (props:skillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>icon</div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};
