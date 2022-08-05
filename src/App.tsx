import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import Login from "./features/Auth/LoginContent";
import ResetPage from "./features/Pages/ResetPage";

function App() {
    const { isLogin } = useAppSelector((state) => state.auth);

    if (isLogin) {
        return (
            <Routes>
                <Route path="home" element={<Login />} />

                <Route path="*" element={<Navigate to="home" />} />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="" element={<Login />} />
            <Route path="reset" element={<ResetPage />} />

            <Route path="*" element={<Navigate to="" />} />
        </Routes>
    );
}

export default App;
