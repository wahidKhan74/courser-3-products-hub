import { fetchPosts } from '../apis/postsApi';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from './types/postTypes';

export const getPosts = () => {
    // asyn fetch call
    return async (dispatch) => {
        dispatch({ type: FETCH_POSTS_REQUEST});
        // habdle failure or success of api call
        try {
            const posts = await fetchPosts();
            dispatch({ type: FETCH_POSTS_SUCCESS, payload: posts });
        } catch(error) {
            dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
        }
    }
     
}