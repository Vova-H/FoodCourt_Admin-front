import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    users: {}
};

export const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        saveUsers(state, action) {
            state.users = action.payload
        }
    }
});
export const {saveUsers} = usersSlice.actions
export default usersSlice.reducer;
