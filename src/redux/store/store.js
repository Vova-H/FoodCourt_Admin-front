import {configureStore} from '@reduxjs/toolkit';
import {authAPI} from '../services/AuthService';
import {dishesAPI} from "../services/DishesService";
import {usersAPI} from "../services/UsersService";
import authReducer from '../features/AuthSlice';
import langReducer from '../features/LangSlice';
import dishesReducer from '../features/DishesSlice';
import userReducer from "../features/UserSlice"
import usersReducer from "../features/UsersSlice"
import currencyReducer from "../features/CurrenciesSlice"
import ordersReducer from "../features/OrdersSlice"
import {avatarAPI} from "../services/AvatarService";
import {currenciesAPI} from "../services/CurrenciesService";
import {ordersAPI} from "../services/OrdersService";

export const setupStore = () => {
    return configureStore({
        reducer: {
            [authAPI.reducerPath]: authAPI.reducer,
            [dishesAPI.reducerPath]: dishesAPI.reducer,
            [usersAPI.reducerPath]: usersAPI.reducer,
            [avatarAPI.reducerPath]: avatarAPI.reducer,
            [currenciesAPI.reducerPath]: currenciesAPI.reducer,
            [ordersAPI.reducerPath]: ordersAPI.reducer,
            dishesReducer,
            authReducer,
            langReducer,
            userReducer,
            usersReducer,
            currencyReducer,
            ordersReducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([
                authAPI.middleware, dishesAPI.middleware, usersAPI.middleware,
                avatarAPI.middleware, currenciesAPI.middleware, ordersAPI.middleware
            ])
    });
};
