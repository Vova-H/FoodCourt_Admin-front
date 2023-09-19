import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    users: [],
    userDetailsSlice: {}
};

export const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        saveUsers(state, action) {
            state.users = action.payload
        },
        changeRoleForUser(state, action) {
            const user = state.users.find(user => user.id === action.payload.userId)
            user.roles = action.payload.roles
        },
    },

});
export const {saveUsers, changeRoleForUser} = usersSlice.actions
export default usersSlice.reducer;
