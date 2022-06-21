import React from 'react';
import style from './MainContent.module.css'
import {LinkContent} from "../LinkContent";
import {Content} from "../Content";

export const MainContent = () => {
    return (
        <div className={style.mainContent}>
            <Content content1={`HI THERE! I'M`} content2={'MAKSIM'} content3={'BAGAEV'}/>
            <LinkContent content1={'About'} content2={'Me'} />
            <LinkContent content1={'My'} content2={'Portfolio'}/>
            <LinkContent content1={'Get'} content2={'In Touch'}/>
        </div>
    );
};
