import { useState } from "react";

const Profile = () => {
    const [title, setTitle] = useState('')
    console.log(title)

    return (
        <div className="profile">
            <h2>Profile</h2>
            <from>
                <label>Post title:</label>
                <input type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Post body:</label>
                <textarea required></textarea>
                <label>Post author:</label>
                <input type="text" />
                <button>Submit Post</button>
            </from>
        </div>

    );
}

export default Profile;
