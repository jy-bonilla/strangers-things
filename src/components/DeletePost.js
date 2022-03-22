import React from "react"


const DeletePost = (props) => {
    const { id } = props
    const handleDeletePost = async (event) => {
        event.preventDefault()
        await fetch(`https://strangers-things.herokuapp.com/api/2110-vpi-web-pt-resources/posts/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + localStorage.getItem("token")
            }
        }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(console.error);
    }
    return (
        <div>
            <button onClick={handleDeletePost}>Delete</button>
        </div>
    )
}

export default DeletePost;