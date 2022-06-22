import React from 'react';
import styleComponents from '../StyleComponents.module.css'
import {NavLink} from "react-router-dom";

export const AboutMe = () => {
    return (
        <div className={styleComponents.components}>
            <div>AboutMe</div>
            <button>
                <NavLink to={'/portfolio'}>X</NavLink>
            </button>
        </div>
    );
};
