import React, { useEffect, useState } from "react";


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