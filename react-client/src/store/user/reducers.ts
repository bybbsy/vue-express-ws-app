import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IUserState {
  email: string | null
}

const initialState: IUserState = {
  email: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    }
  }
})

export const {
  setEmail,
} = userSlice.actions;

export default userSlice.reducer;
