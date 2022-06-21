import React from 'react';
import style from './MainContent.module.css'
import {AboutMe} from "./aboutMe/AboutMe";
import {InfoMe} from "./infoMe/InfoMe";
import {MyPortfolio} from "./myPortfolio/MyPortfolio";
import {GetInTouch} from "./getInTouch/GetInTouch";

export const MainContent = () => {
    return (
        <div className={style.mainContent}>
            <InfoMe/>
            <AboutMe/>
            <MyPortfolio/>
            <GetInTouch/>
        </div>
    );
};
