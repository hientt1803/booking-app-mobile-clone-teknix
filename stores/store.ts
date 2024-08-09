import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "./storage";
import { GlobalSlice } from "./features/global/global-slice";
import { HotelSlice } from "./features/hotel";

// Configs
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: [
    // collectionApi.reducerPath,
    // regionApi.reducerPath,
    "globalSlice",
    // "cartSlice",
    // "userSlice",
    // settingApi.reducerPath,
  ],
};

// reduer
const rootReducer = combineReducers({
  // [productApi.reducerPath]: productApi.reducer,
  // userSlice: userSlice.reducer,
  globalSlice: GlobalSlice.reducer,
  HotelSlice: HotelSlice.reducer,
});

// Middleware
// const middlewares = [productApi.middleware];

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        date: false,
      },
    }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
