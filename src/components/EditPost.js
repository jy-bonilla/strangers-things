import React, { useState } from 'react';




const EditPost = (props) => {
    const [clicked, setClicked] = useState(false)
    const origDescription = props.origDescription
    const loadedActivities = props.loadedActivities
    const setLoadedActivities = props.setLoadedActivities
    const origName = props.origName
    const { id } = props
    const [name, setName] = useState(origName)
    const [description, setDescription] = useState(origDescription)
    const handleMessageChange = (event) => {
        setName(event.target.value)
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }
    const handleEditActivitySubmit = async (event) => {
        event.preventDefault()
        const edits = {
            name: name,
            description: description
        }
        console.log("submitted")


        fetch('http://strangers-things.herokuapp.com/api/2110-vpi-web-pt-resources/', {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + localStorage.getItem("token")
            },
            body: JSON.stringify({
                post: {
                    title: title,
                    description: body,
                    price: price,
                    location: "New York, NY",
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
        clicked ?
            <div>
                <div className="editPosts">
                    <form onSubmit={handleEditActivitySubmit}>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' value={name} onChange={handleMessageChange} name='name' />
                        <label htmlFor='description'>Description:</label>
                        <input type='text' name='description' value={description} onChange={handleDescriptionChange} />
                        <button type='submit'>Submit Edits</button>
                    </form>
                </div>
            </div> :
            <div id="editactivity">
                <button onClick={() => setClicked(true)}>Edit Activity</button>
            </div>
    )

}
export default EditPost;