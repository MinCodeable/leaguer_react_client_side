import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LIMIT_CHAMPIONS_PER_PAGE, LIMIT_ASPECTS_PER_PAGE } from "../variableGlobales";

export const lolApi = createApi({
    reducerPath:'lolApi',
    baseQuery:  fetchBaseQuery({ baseUrl: 'https://lol-server-side.herokuapp.com/api/v1/'}),
    endpoints:  (build) => ({
                    getChampions: build.query({
                        query:  ({page=1, textSearch="", type_champ="", difficulty="", order="asc", limit=LIMIT_CHAMPIONS_PER_PAGE}) => `champions?pag=${page}&txt=${textSearch}&type=${type_champ}&dif=${difficulty}&cond=${order}&limit=${limit}`
                    }),
                    getAspects: build.query({
                        query: ({page=1, nameChampion="", limit=LIMIT_ASPECTS_PER_PAGE}) => `aspects?pag=${page}&name=${nameChampion}&limit=${limit}`
                    }),
                    getChampionById: build.query({
                        query: (id) => `champions/${id}`
                    }),
                    getAspectsNames: build.query({
                        query: () => `champions/namechamp`
                    })
                })
})

export const {useGetChampionsQuery, useGetAspectsQuery, useGetAspectsNamesQuery, useGetChampionByIdQuery} = lolApi;
