import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import URL_path from "../../../config";
import * as SecureStore from "expo-secure-store";


export const usersAPI = createApi({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `${URL_path}/users`,
        prepareHeaders: async (headers) => {
            const token = await SecureStore.getItemAsync("token")
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({


        getAllUsers: builder.mutation({
            query: (queries) => {
                return {
                    url: `/?words=${queries.words}`,
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                };
            },
            invalidatesTags: ['Users']
        }),


        getUserById: builder.query({
            query: (id) => {
                return {
                    url: `/${id}`,
                    method: "GET",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }

                };
            },
            invalidatesTags: ['Users']
        }),
    })
});

export const {
    useGetUserByIdQuery,
    useGetAllUsersMutation
} = usersAPI;
