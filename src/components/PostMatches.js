import React, { useEffect, useState } from "react";

// const [q, setQ] = useState("");

// const Search = (post, text) => {
//         return post.title.toLowerCase().includes(searchInput.toLowerCase())
//             || post.author.username.toLowerCase().includes(searchInput.toLowerCase())
//             || post.description.toLowerCase().includes(searchInput.toLowerCase())
//     }

//     return(
//         <div className="posts-navbar">
//         <h2>Posts</h2>
//         <div className="posts-navbar-search">
//             <label htmlFor="search-form">
//                 <input type="search" name="search-form"
//                     id="search-form" className="search-input"
//                     placeholder="Search for.."
//                     value={q} onChange={(e) => setQ(e.target.value)} />
//             </label>
//         </div>
//     </div>
//     )
//     }


const PostMatches = (post, text) => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    // return true if any of the fields you want to check against include the text
    // strings have an .includes() method 


    const filteredPosts = posts.filter(post => PostMatches(post, searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : posts;

    // then, in our jsx below... map over postsToDisplay instead of posts
    return (
        <div className="posts-navbar">
            <h2>Posts</h2>
            <div className="posts-navbar-search">
                <label htmlFor="search-form">
                    <input type="search" name="search-form"
                        id="search-form" className="search-input"
                        placeholder="Search for.."
                        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </label>
                { }
            </div>
        </div>
    );
}


export default PostMatches;