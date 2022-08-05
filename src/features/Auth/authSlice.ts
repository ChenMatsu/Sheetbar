import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../common/interface";

const initialState: AuthState = {
    username: "",
    password: "",
    isLogin: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
});

export default authSlice.reducer;
