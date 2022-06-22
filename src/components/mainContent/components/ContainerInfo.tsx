import React from 'react';
import style from './ContainerInfo.module.css'
import {NavLink} from "react-router-dom";
import iconVizitka from '../../../common/images/icon/iconVizitka.png'

type ContainerInfoType = {}

export const ContainerInfo = () => {
    return (
        <div className={style.containerInfo}>
            <div className={style.info}>
                <div className={style.span}>
                    <span>about</span>
                    <span className={style.spanTwo}>me</span>
                </div>
                <div className={style.containerIcon}>
                    <span className={style.trait}></span>
                    <span><img src={iconVizitka} alt={'vizitka'}/></span>
                    <span className={style.trait}></span>
                </div>

            </div>
            <div className={style.button}>
                    <span>
                        <NavLink to={'/portfolio'}>×</NavLink>
                    </span>
            </div>
        </div>
    );
};
