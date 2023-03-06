import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRoomItem } from "../../components/Rooms/RoomList";

const initialState: IRoomItem = {
  _id: '',
  description: '',
  name: '',
  size: 0,
  users: []
}

export const CurrentRoomSlice = createSlice({
  name: 'currnet-room',
  initialState,
  reducers: {
    setCurrentRoom(state, action: PayloadAction<IRoomItem>) {
      state = action.payload;
    }
  }
})
