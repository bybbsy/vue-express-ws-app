import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
  'fetchPosts',
  async (_, thunkApi) => {
    try {
      console.log('asdas');

      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue('Error: ' + error)
    }
  }
)
