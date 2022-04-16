import React, { useState } from "react";

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [price, setPrice] = useState('');
    // console.log('title:', title)
    // console.log('body:', body)
    // console.log('price:', price)

    const handleSubmit = async (e) => {
        e.preventDefault()

        // const post = { title, body, price };

        await fetch('https://strangers-things.herokuapp.com/api/2110-vpi-web-pt-resources/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
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
                if (result.success === true) {
                    alert('Your new post has been created')
                }
            })
            .catch(console.error);
        console.log('gettoken:', localStorage.getItem('token'))
    }

    return (
        <div className="NewPost">
            <h3>Create New Post</h3>
            <form onSubmit={handleSubmit}>
                <label>Post Title:</label>
                <input type="text" required value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <label>Post Body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Price:</label>
                <input type="text" required value={price} onChange={(e) => setPrice(e.target.value)}></input>
                <button>Submit Post</button>
            </form>
        </div>
    );
}

export default NewPost;
