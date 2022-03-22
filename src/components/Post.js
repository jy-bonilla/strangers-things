import React, { useEffect, useState } from "react";
import DeletePost from "./DeletePost";
import { Link } from "react-router-dom";


const Post = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts.id)

    useEffect(() => {
        fetch('https://strangers-things.herokuapp.com/api/2110-vpi-web-pt-resources/posts')
            .then((response) => response.json())
            .then(({ data }) => {
                console.log('data:', data.post)
                // console.log('dataId', data.location)
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

            {posts.map((post, index) => (
                <div className="post" key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p className="post-price">Price: {post.price}</p>
                    <p className="post-seller">Seller: {post.author.username} </p>
                    <p className="post-location">Location: {post.location} </p>
                    <DeletePost id={posts.id} />

                </div>
            ))}
        </div>
    )
}
export default Post;