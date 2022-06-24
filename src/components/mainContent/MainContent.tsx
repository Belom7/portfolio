import React from 'react';
import style from './MainContent.module.css'
import {LinkContent} from "./content/LinkContent";
import {Content} from "./content/Content";
import {Route, Routes} from "react-router-dom";
import {ContainerModal} from "./components/ContainerModal";
import {AboutMe} from "./components/aboutMe/AboutMe";
import {MyPortfolio} from "./components/myPortfolio/MyPortfolio";
import {GetInTouch} from "./components/getInTouch/GetInTouch";

export const MainContent = () => {

    return (
        <div className={style.mainContent}>
            <Content content1={`HI THERE! I'M`} content2={'MAKSIM'} content3={'BAGAEV'}
                     content4={'FRONTEND DEVELOPER'}/>
            <LinkContent name1={'About'} name2={'Me'} link={'/AboutMe'}/>
            <LinkContent name1={'My'} name2={'Portfolio'} link={'/MyPortfolio'}/>
            <LinkContent name1={'Get'} name2={'In Touch'} link={'/GetInTouch'}/>
            <Routes>
                <Route path={'/aboutMe'}
                       element={<ContainerModal name1={'about'} name2={'me'}>
                           <AboutMe/>
                       </ContainerModal>}/>
                <Route path={'/MyPortfolio'}
                       element={<ContainerModal name1={'My'} name2={'Portfolio'}>
                           <MyPortfolio/>
                       </ContainerModal>}/>
                <Route path={'/GetInTouch'}
                       element={<ContainerModal name1={'Get'} name2={'In Touch'}>
                           <GetInTouch/>
                       </ContainerModal>}/>
            </Routes>

        </div>
    );
};
