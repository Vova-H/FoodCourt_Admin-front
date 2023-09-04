import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    dishes: [],
}

const dishesSlice = createSlice({
    name: 'dishes',
    initialState: initialState,
    reducers: {
        saveDishes: (state, action) => {
            state.dishes = action.payload;
        },
        hideDishSlice: (state, action) => {
            const dishIdToHide = action.payload;
            const dishIndexToHide = state.dishes.findIndex(dish => dish.id === dishIdToHide);
            state.dishes[dishIndexToHide].isActive = false;
        },

        showDishSlice: (state, action) => {
            const dishIdToShow = action.payload;
            const dishIndexToShow = state.dishes.findIndex(dish => dish.id === dishIdToShow);
            state.dishes[dishIndexToShow].isActive = true;
        },
    },
});
export const {
    saveDishes,
    hideDishSlice,
    showDishSlice
} = dishesSlice.actions
export default dishesSlice.reducer;
