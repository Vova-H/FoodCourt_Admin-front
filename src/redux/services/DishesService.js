import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import URL_path from "../../../config";
import * as SecureStore from "expo-secure-store";


export const dishesAPI = createApi({
    reducerPath: 'dishesAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `${URL_path}/dishes`,
        prepareHeaders: async (headers) => {
            const token = await SecureStore.getItemAsync("token")
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),

    tagTypes: ['Dishes'],
    endpoints: (build) => ({
        getAllDishes: build.query({
            query: (queries) => ({
                url: `/?lang=${queries.lang}&userId=${queries.userId}`,
                method: "GET",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
        }),

        getDishById: build.query({
            query: (id) => ({
                url: `/${id}`,
                method: "GET",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
        }),


        getDishesByKeywords: build.mutation({
            query: (queries) =>
                ({
                    url: `/search/?lang=${queries.lang}&words=${queries.words}&userId=${queries.userId}`,
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }),
        }),


        hideDish: build.mutation({
            query: (dishId) =>
                ({
                    url: `/hide/${dishId}`,
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }),
        }),

        showDish: build.mutation({
            query: (dishId) =>
                ({
                    url: `/show/${dishId}`,
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }),
        }),


        addDish: build.mutation({
            query: (formData) => ({
                url: `/add`,
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }),
        }),

        editDish: build.mutation({
            query: (data) =>
                ({
                url: `/edit/${data.id}`,
                method: 'POST',
                body: data.formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }),
        }),
    })
});

export const {
    useGetAllDishesQuery,
    useGetDishesByKeywordsMutation,
    useAddDishMutation,
    useHideDishMutation,
    useShowDishMutation,
    useGetDishByIdQuery,
    useEditDishMutation
} = dishesAPI;
