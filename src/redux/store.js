import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskReducer from '../redux/task/reducer';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: { task: taskReducer },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;