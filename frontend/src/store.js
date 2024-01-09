import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import cartSliceReducer from "./slices/cartSlice";
import authSliceReducer from "./slices/authSlice";

//This all is about Redux i.e. state management tool
//Added api and cart under redux state
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddlerware) =>
    getDefaultMiddlerware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
