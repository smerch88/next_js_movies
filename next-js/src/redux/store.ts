import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { moviesReducer } from "./movies/movies-slice";

const persistConfig = {
  key: "movies",
  whitelist: ["movies"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, moviesReducer);

export const store = configureStore({
  reducer: { movies: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
