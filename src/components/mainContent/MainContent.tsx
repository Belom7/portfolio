import React from 'react';
import style from './MainContent.module.css'
import {LinkContent} from "./content/LinkContent";
import {Content} from "./content/Content";
import {Route, Routes} from "react-router-dom";
import {ContainerInfo} from "./components/ContainerInfo";

export const MainContent = () => {
    return (
        <div className={style.mainContent}>
            <Content content1={`HI THERE! I'M`} content2={'MAKSIM'} content3={'BAGAEV'} content4={'FRONTEND DEVELOPER'}/>
            <LinkContent name1={'About'} name2={'Me'} link={'/AboutMe'}/>
            <LinkContent name1={'My'} name2={'Portfolio'} link={'/MyPortfolio'}/>
            <LinkContent name1={'Get'} name2={'In Touch'} link={'/GetInTouch'}/>
            <Routes>
                <Route path={'/aboutMe'} element={<ContainerInfo name1={'about'} name2={'me'} value={1}/>}/>
                <Route path={'/MyPortfolio'} element={<ContainerInfo name1={'My'} name2={'Portfolio'} value={2}/>}/>
                <Route path={'/GetInTouch'} element={<ContainerInfo name1={'Get'} name2={'In Touch'} value={3}/>}/>
            </Routes>
        </div>
    );
};
