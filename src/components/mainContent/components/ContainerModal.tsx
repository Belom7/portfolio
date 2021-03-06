import React from 'react';
import style from './ContainerInfo.module.css'
import {NavLink} from "react-router-dom";
import iconVizitka
    from '../../../common/images/icon/103145091-identification-card-icon-id-profile-white-icon-with-shadow-on-transparent-background.webp'
import {AboutMe} from "./aboutMe/AboutMe";
import { MyPortfolio } from './myPortfolio/MyPortfolio';
import {GetInTouch} from "./getInTouch/GetInTouch";

type ContainerInfoType = {
    name1: string
    name2: string
    children: mainReturn
}

type mainReturn = ReturnType<typeof AboutMe> | ReturnType<typeof MyPortfolio> | ReturnType<typeof GetInTouch>

export const ContainerModal = ({name1, name2, children}: ContainerInfoType) => {

    return (
        <div className={style.containerModal}>
            <div className={style.header}>
                <div className={style.span}>
                    <span>{name1}</span>
                    <span className={style.spanTwo}>{name2}</span>
                </div>
                <div className={style.containerIcon}>
                    <span className={style.trait}> </span>
                    <span><img src={iconVizitka} alt={'vizitka'}/></span>
                    <span className={style.trait}> </span>
                </div>

            </div>
            <div className={style.button}>
                    <span>
                        <NavLink to={'/'}>×</NavLink>
                    </span>
            </div>
            {children}
        </div>
    );
};
