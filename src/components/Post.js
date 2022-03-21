import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Post = () => {
    const [posts, setPosts] = useState([]);
    console.log('posts:', posts)

    useEffect(() => {
        fetch('https://strangers-things.herokuapp.com/api/2110-vpi-web-pt-resources/posts')
            .then((response) => response.json())
            .then(({ data }) => {
                // console.log('data:', data.posts)
                setPosts(data.posts)
            })
            .catch(console.error);
    }, [])

    return (

        <div className="posts-list">
            <div className="postOptions">
                <h2>Posts</h2>
                <Link to="/PostMatches">Search</Link>
                <Link to="/NewPost">Create NewPost</Link>
            </div>

            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p className="post-price">Price: {post.price}</p>
                    <p className="post-seller">Seller: {post.author.username} </p>
                    <p className="post-location">Location: {post.location} </p>

                </div>
            ))}
        </div>
    )
}
export default Post;