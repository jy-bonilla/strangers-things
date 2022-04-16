import React from "react"


const DeletePost = (props) => {

    const postId = props.id
    const bearer = 'Bearer ' + localStorage.getItem("token")
    // console.log('postId!!', postId)
    console.log('bearer:', bearer)
    const handleDeletePost = async () => {

        await fetch(`https://strangers-things.herokuapp.com/api/2110-vpi-web-pt-resources/posts/${postId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            }
        }).then((response) => response.json())
            .then((result) => {
                console.log('result.success:', result.success);
                if (result.success === true) {
                    alert('Your post has been deleted. Please refresh the page to see changes.')
                } else {
                    alert('You do not have the rights to delete this post.')
                }

            }).catch(console.error);


    }

    return (
        <div className="deletePostButton">
            <button onClick={handleDeletePost}>Delete</button>
        </div>
    )
}

export default DeletePost;