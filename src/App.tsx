import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";


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
