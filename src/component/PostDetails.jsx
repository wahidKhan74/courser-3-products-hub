import React, { useReducer, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../featuress/posts/postSlice';


// PostDetails component to fetch and display posts
function PostDetails() {
   
    const dispatch = useDispatch() ;
    const { posts, status , error } = useSelector((state)=>state.posts);

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    if (status === 'loading' ) {
        return <div className="text-center mt-10 text-gray-600 text-lg">Loading posts...</div>;
    }

    if (status === 'failed' ) {
        return <div className="text-center mt-10 text-red-600">Error: {error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Post Details</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                { status === 'succeeded' && posts.map(post => (
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