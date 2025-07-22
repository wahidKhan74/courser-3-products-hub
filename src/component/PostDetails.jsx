import React, { useReducer, useEffect } from 'react';

// intial state
const initialState = {
    loading: true,
    posts: [],
    error: null
};

// reducer function to manage post details state
function postDetailsReducer(state, action) {
    switch (action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return { ...state, loading: false, posts: action.payload };
        case 'FETCH_POSTS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

// PostDetails component to fetch and display posts
function PostDetails() {
    // useReducer hook to manage post details state
    const [state, dispatch] = useReducer(postDetailsReducer, initialState);

    useEffect(() => {
        // Fetch posts from an API
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
            } catch (error) {
                dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
            }
        };

        fetchPosts();
    }, []);

    if (state.loading) {
        return <div className="text-center mt-10 text-gray-600 text-lg">Loading posts...</div>;
    }

    if (state.error) {
        return <div className="text-center mt-10 text-red-600">Error: {state.error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Post Details</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {state.posts.map(post => (
                    <div
                        key={post.id}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                        <p className="text-gray-600">{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostDetails;