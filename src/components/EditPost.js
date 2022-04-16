import React, { useEffect, useState } from 'react';
import Post from "./Post";




const EditPost = (props) => {
    const postId = props.id
    // const [editPostClicked, setEditPostClicked] = useState(false)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    // const [edit, setEdit] = useState(null);
    // const [editTitle, setEditTitle] = useState("");
    const bearer = 'Bearer ' + localStorage.getItem("token")
    console.log('postId!!', postId)

    const handleEditPost = async (event) => {
        event.preventDefault()

        fetch(`https://strangers-things.herokuapp.com/api/2110-vpi-web-pt-resources/posts/${postId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },
            body: JSON.stringify({
                post: {
                    title: title,
                    description: description,
                    price: price,
                    // willDeliver: true
                }
            })
        }).then(response => response.json())
            .then(result => {
                // console.log(result);
                // console.log('result.success:', result.success);
                if (result.success === true) {
                    alert('Your post has edited. Please refresh the page to see changes.')
                } else {
                    alert('You do not have the rights to edit this post.')
                }
            })
            .catch(console.error);
    }
    return (
        // editPostClicked ?
        <div className='editPostButton'>
            <form on onSubmit={handleEditPost}>
                <label>Title:</label>
                {/* {post._id === edit ? (<input type="text" onChange={(e) => setEditTitle(e.target.value)} value={editTitle} />)
                    : (<h2>{post.title}</h2>)} */}
                <input type="text" required value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <label>Description:</label>
                <textarea required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <label>Price:</label>
                <input type="text" required value={price} onChange={(e) => setPrice(e.target.value)}></input>
            </form>
            <div>
                <button onClick={handleEditPost}>Edit</button>
            </div>

        </div>
    )

}
export default EditPost;