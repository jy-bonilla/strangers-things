import React from "react";
import { useState } from "react";

const CreateMessage = (props) => {
    const postId = props.postId
    const [message, setMessage] = useState("")

    const handleCreateMessage = async (event) => {
        event.preventDefault()
        let messageData = {
            message: {
                content: `${message}`
            }
        }
        console.log("message:", message)
        console.log("postId:", postId)
        const bearer = 'Bearer ' + localStorage.getItem("token")
        fetch(`https://strangers-things.herokuapp.com/api/2110-vpi-web-pt-resources/posts/${postId}/messages`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },
            body: JSON.stringify({
                post: {
                    body: messageData
                }
            })
        }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(console.error);
    }


    return (
        <div></div>
    )
}


export default CreateMessage;