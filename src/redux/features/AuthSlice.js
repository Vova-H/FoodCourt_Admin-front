import {createSlice} from '@reduxjs/toolkit';
import * as SecureStore from "expo-secure-store";

const initialState = {
    JWT: "",
    userFromJWT: {},
    isAuthorized: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        saveJWT(state, action) {
            state.JWT = action.payload;
        },
        saveUserFromJWT(state, action) {
            state.userFromJWT = action.payload
        },
        authorizeUser(state) {
            state.isAuthorized = true
        },
        logoutUser(state) {
            state.isAuthorized = false
            state.JWT = ""
            state.userFromJWT = {}
            const removeToken = async () => {
                await SecureStore.deleteItemAsync("token")
            }
            removeToken()
        },
    }
});
export const {
    saveUserFromJWT,
    saveJWT,
    authorizeUser,
    logoutUser,
} = authSlice.actions
export default authSlice.reducer;
