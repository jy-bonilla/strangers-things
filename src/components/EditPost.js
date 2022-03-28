import React, { useState } from 'react';




const EditPost = (props) => {
    const postId = props.id
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [price, setPrice] = useState('');
    const bearer = 'Bearer ' + localStorage.getItem("token")
    // console.log('postId!!', postId)

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
                    description: body,
                    price: price,
                    willDeliver: true
                }
            })
        }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(console.error);
    }
    return (
        <div className='editPostButton'>
            <button onClick={handleEditPost}>Edit</button>
        </div>
    )

}
export default EditPost;