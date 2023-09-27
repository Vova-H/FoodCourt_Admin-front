import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import URL_path from "../../../config";
import * as SecureStore from "expo-secure-store";


export const ordersAPI = createApi({
    reducerPath: 'ordersAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `${URL_path}/orders/`,
        prepareHeaders: async (headers) => {
            const token = await SecureStore.getItemAsync("token")
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Orders'],
    endpoints: (build) => ({

        getAllActiveOrders: build.mutation({
            query: (data) =>
                ({
                    url: `getAllActiveOrders/?lang=${data.lang}`,
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                }),
        }),


        completeOrderById: build.mutation({
            query: (data) =>
                ({
                    url: `completeOrderById/?id=${data.orderId}`,
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                }),
        }),

    })
});

export const {useGetAllActiveOrdersMutation, useCompleteOrderByIdMutation} = ordersAPI;
