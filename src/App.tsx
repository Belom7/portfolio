import React from 'react';
import './App.css';
import {Avatar} from "./components/avatar/Avatar";

import {MainContent} from "./components/mainContent/MainContent";
import {Route, Routes} from "react-router-dom";
import {AboutMe} from "./components/mainContent/aboutMe/AboutMe";

function App() {
    return (
        <div className="App">
            <Avatar/>
            <MainContent/>
            <Routes>
                <Route path={'/infoMe'} element={<AboutMe/>}/>
            </Routes>
        </div>
    );
}

export default App;
