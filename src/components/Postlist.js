import React from "react";


const Postlist = ({ posts, message }) => {
    return (
        <div className="post-list">
            <h2>{message}</h2>
            {posts.map((post) => (
                <div className="post-preview" key={post.id}>
                    <h2>{post.message}</h2>
                </div>
            ))}
        </div>
    );
}

export default Postlist;