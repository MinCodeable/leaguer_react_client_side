// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const lolApi = createApi({
    reducerPath:'lolApi',
    baseQuery:  fetchBaseQuery({ baseUrl: 'https://lol-server-side.herokuapp.com//api/v1/'}),
    endpoints:  (build) => ({
                    getChampions: build.query({
                        // query:  (data) => `champions?pag=${data.page}&txt=${data.textSearch}&type=${data.type_champ}&dif=${data.difficulty}&cond=${data.order}&limit=${5}`
                        query:  (data) => `champions`
                    }),
                    getAspects: build.query({
                        // query: (data) => `aspects?pag=${data.page}&name=${data.nameChampion}&limit=${10}`
                        query: (data) => `aspects`
                    })
                })
})

export const {useGetChampionsQuery, useGetAspectsQuery} = lolApi;
