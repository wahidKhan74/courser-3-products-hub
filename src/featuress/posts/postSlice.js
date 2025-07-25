import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchPosts } from "../../api/postsApi";

// step 1: define intial state
const initialState = {
    posts: [],
    status: 'idle',
    error: ''
}

// call apis with async call
export const getPosts = createAsyncThunk('posts/fetchPosts', async ()=> {
    return await fetchPosts();
})

// create slice
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        // loading case
        builder.addCase(getPosts.pending, (state, action) => {
            state.status = 'loading';
        });

        // success case
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload;
        })

        // loading case
        builder.addCase(getPosts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export default postsSlice.reducer;