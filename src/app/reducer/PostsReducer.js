import  {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../actions/types/postTypes';


const initialListState ={
  loading: false,
  posts: [],
  error: '',
};
//  create fech api reducer for posts 
function postReducer(state=initialListState, action) {

    switch(action.type) {
        case FETCH_POSTS_REQUEST:
            return { ...state, loading:true };
        case FETCH_POSTS_SUCCESS:
            return { ...state, loading:false , posts:action.payload, error:''  };
        case FETCH_POSTS_FAILURE:
            return { ...state, loading:false, posts:[], error:action.payload };
        default:
            return state;
    }

}

export default postReducer;