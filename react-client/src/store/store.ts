import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import modalReducer from './modal/reducers';
import userReducer from './user/reducers';
import postsReducer from "./posts/reducers";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
    posts: postsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
