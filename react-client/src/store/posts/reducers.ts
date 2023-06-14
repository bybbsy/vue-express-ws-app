import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./actions";


interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

interface PostsState {
  posts: Post[],
  error: string,
  isLoading: boolean
}

const initialState: PostsState = {
  posts: [],
  error: '',
  isLoading: false,
};

export const postsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<Post[]>) => {
      state.error = '';
      state.isLoading = false;
      state.posts = action.payload;
    },
    [fetchPosts.pending.type]: (state, action: PayloadAction<Post[]>) => {
      state.error = '';
      state.isLoading = true;
    },
    [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  }
})

export default postsReducer.reducer;

