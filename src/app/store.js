import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../featuress/counter/counterSlice';
import postsReducer from '../featuress/posts/postSlice';

export const store = configureStore({

    reducer: {
        counter : counterReducer,
        posts: postsReducer
    }
});