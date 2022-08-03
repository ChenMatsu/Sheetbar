import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./features/Auth/Login";

function App() {
    return (
        <Routes>
            <Route path="" element={<Login />} />
            <Route path="home" element={<Login />} />
            <Route path="reset" element={<Login />} />
        </Routes>
    );
}

export default App;
