import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import './index.css';
import Details from "./pages/Details";

function App() {
    return (
        <>
            <main>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/:id'} element={<Details/>}/>
                </Routes>
            </main>
        </>
    );
}

export default App;
