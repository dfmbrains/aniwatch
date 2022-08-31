import React from 'react';
import {Route, Routes} from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import './index.css';

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/:id'} element={<Details/>}/>
            </Routes>
        </>
    );
}

export default App;
