import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { CurrentRoomSlice } from './currentRoom/state';

export const rootReducer = combineReducers({
  currentRoom: CurrentRoomSlice.reducer
})

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
