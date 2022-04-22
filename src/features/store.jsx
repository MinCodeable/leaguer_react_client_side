import { configureStore } from "@reduxjs/toolkit";
import { lolApi } from "../services/lolApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store  = configureStore({
    reducer: {
        [lolApi.reducerPath]: lolApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(lolApi.middleware)
});

setupListeners(store.dispatch);
