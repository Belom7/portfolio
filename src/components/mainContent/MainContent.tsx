import React from 'react';
import style from './MainContent.module.css'
import {LinkContent} from "./content/LinkContent";
import {Content} from "./content/Content";
import {Route, Routes} from "react-router-dom";
import {AboutMe} from "./components/aboutMe/AboutMe";

export const MainContent = () => {
    return (
        <div className={style.mainContent}>
            <Content content1={`HI THERE! I'M`} content2={'MAKSIM'} content3={'BAGAEV'} content4={'FRONTEND DEVELOPER'}/>
            <LinkContent content1={'About'} content2={'Me'} content3={'/AboutMe'}/>
            <LinkContent content1={'My'} content2={'Portfolio'} content3={'/1'}/>
            <LinkContent content1={'Get'} content2={'In Touch'} content3={'/2'}/>
            <Routes>
                <Route path={'/AboutMe'} element={<AboutMe/>}/>
            </Routes>
        </div>
    );
};
