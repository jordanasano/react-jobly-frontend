import { useState } from "react";
import { useContext } from "react";
import userContext from "./userContext";
/**
 *
 */

function Profile() {
    const [formData, setFormData] = useState({});
    const user = useContext(userContext);

    return (
        <p>This is our Profile form for {user.username}</p>
    );

}

export default Profile;
