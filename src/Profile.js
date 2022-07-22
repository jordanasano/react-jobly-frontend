import { useState } from "react";
import { useContext } from "react";
import userContext from "./userContext";
/**
 *
 */

function Profile({ updateUser }) {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState(null);
    const user = useContext(userContext);

    function handleChange(evt) {
      const { name, value } = evt.target;
      setFormData(st => ({
        ...st,
        [name]: value,
      }));
    }


    // Stops the page from reloading and invokes signup function
    // with user input
    async function handleSubmit(evt) {
      evt.preventDefault();
      try {
        await updateUser(formData);
      } catch(err) {
        setErrors(err);
      }
    }

    return (
      <form onSubmit={handleSubmit} className='Signup-container'>
        {errors && (
          errors.map((err, idx) =>
            <p key={idx} className='Signup-error'>{err.slice(8)}</p>)
        )}
        <label htmlFor="username"></label>
        <input
          id="username"
          name="username"
          disabled="true"
          value={user.username} />
        <label htmlFor="firstName"></label>
        <input
          id="firstName"
          name="firstName"
          onChange={handleChange}
          placeholder="Enter first name..." />
        <label htmlFor="lastName"></label>
        <input
          id="lastName"
          name="lastName"
          onChange={handleChange}
          placeholder="Enter last name..." />
        <label htmlFor="email"></label>
        <input
          id="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter email..." />
        <button>Update Account!</button>
      </form>
    );

}

export default Profile;
