import { useEffect, useState } from 'react';
import Post from '../post/Post';

function WrapperPost() {
    const [posts, setPosts] = useState([]);
    useEffect(function () {
        const fetchPost = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPost();
    }, []);

    return (

        <div>
            {posts.map(post => (
                <Post id={post.id} title={post.title} body={post.body}></Post>
            ))}
        </div>
    )
}

export default WrapperPost;