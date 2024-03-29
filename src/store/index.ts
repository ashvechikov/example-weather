import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

type ApplicationState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
