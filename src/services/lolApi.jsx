import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const lolApi = createApi({
    reducerPath:'lolApi',
    baseQuery:  fetchBaseQuery({ baseUrl: 'https://lol-server-side.herokuapp.com/api/v1/'}),
    endpoints:  (build) => ({
                    getChampions: build.query({
                        query:  ({page=1, textSearch="", type_champ="", difficulty="", order="asc", limit=5}) => `champions?pag=${page}&txt=${textSearch}&type=${type_champ}&dif=${difficulty}&cond=${order}&limit=${limit}`
                    }),
                    getAspects: build.query({
                        query: ({page=1, nameChampion="", limit=10}) => `aspects?pag=${page}&name=${nameChampion}&limit=${limit}`
                    }),
                    getAspectsNames: build.query({
                        query: () => `champions/namechamp`
                    })
                })
})

export const {useGetChampionsQuery, useGetAspectsQuery, useGetAspectsNamesQuery} = lolApi;
