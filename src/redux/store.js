import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createWebStorage from "redux-persist/es/storage/createWebStorage";
import { encryptTransform } from "redux-persist-transform-encrypt";

export function createPersistStore() {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage("local");
}
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createPersistStore();

const cartConfig = {
  key: "cart",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: "SECRET_KEY",
      onError: function (error) {
        throw new Error(error.message);
      },
    }),
  ],
  blacklist: ["addAmount"],
};

const authConfig = {
  key: "auth",
  version: 1,
  storage,
  blacklist: ["user"],
};

const persistedCart = persistReducer(cartConfig, cartReducer);
const persistedAuth = persistReducer(authConfig, authReducer);

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: persistedCart,
    auth: persistedAuth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
