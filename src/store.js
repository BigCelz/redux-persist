import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import cartReducer from "./cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { combineReducers } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";

const persistConfig = {
    key: "root",
    storage,
    version: 1,
}

const rootReducer = combineReducers({
    items: itemReducer,
    cart: cartReducer,
    darkMode : darkModeReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store);