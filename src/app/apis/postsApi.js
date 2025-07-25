export const fetchPosts = async ()=> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!response.ok) throw new Error('Failed to fetch posts data.');
    return await response.json();
}

// add 

// update

// delete